const router = require('express').Router();
const Result = require('../Model/Result');
const {
  updateSomeResults,
  registerResults,
  getResultSummaryAndName,
} = require('../Controllers/resultsControllers');
const { addResultToDog } = require('../Controllers/dogsControllers');
const { addDogToContest } = require('../Controllers/contestControllers');

const {
  auth,
  isUserStaffOrAdmin,
  blockIfPublic,
  isStaffManagerOrAdmin,
  isUserOrAdmin,
} = require('../Middleware/authMiddleware');

//get - leaderboard with summary results from current class in current contest
router.get('/general/:contestId/:classId', async (req, res) => {
  try {
    const summResultsAndName = await getResultSummaryAndName(req, res);
    res.status(200).send(summResultsAndName);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.use(auth);

// get - current, individual result
router.get(
  '/individual/:resultsId/:userId',
  blockIfPublic,
  isUserStaffOrAdmin,
  async (req, res) => {
    try {
      const results = await Result.findById(req.params.resultsId);
      if (results.participantId.valueOf() === req.user._id.valueOf()) {
        res.status(200).send(results);
      } else {
        res.status(401).json({
          success: false,
          message: 'client failed to authenticate with the server',
        });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
);

// post - create results for current competing part, add dog to contest (with resultsID), and result to Dog
router.post(
  '/register/:userId',
  blockIfPublic,
  isUserOrAdmin,
  async (req, res) => {
    try {
      const savedResult = await registerResults(req, res);
      await addDogToContest(req, res, savedResult._id.valueOf());
      await addResultToDog(req, res, savedResult._id.valueOf());
      res.status(201).json(savedResult);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);

// update some results
router.patch(
  '/:resultsId',
  blockIfPublic,
  isStaffManagerOrAdmin,
  async (req, res) => {
    try {
      const result = await updateSomeResults(req, res);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);

module.exports = router;
