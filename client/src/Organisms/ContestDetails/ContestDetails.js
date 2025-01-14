import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Backdrop from '../../Atoms/Modal/Backdrop';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsEmptyBarStyled from '../../Atoms/ContestDetailsEmptyBar/ContestDetailsEmptyBarStyled';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import ErrorComponent from '../../PagesBody/ErrorPage/ErrorComponent';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import Modal from '../Modal/Modal';
import Spinner from '../../Atoms/Spinner/Spinner';
import modalData from '../../Consts/modalData';
import useWindowSize from '../../Hooks/useWindowSize';
import { UserDataContext } from '../../Context/UserDataContext';
import { generateErrorMessage } from '../../Tools/generateErrorMessage';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ContestDetails = ({ contestId }) => {
  const { dispatch, state } = useContext(UserDataContext);
  const { isAuthenticated } = state;
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);
  const [isCloseContestModalOpen, setIsCloseContestModalOpen] = useState(false);
  const navigate = useNavigate();
  const [fetchErrors, setFetchErrors] = useState(null);
  const [toggle, setToggle] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    async function fetchContestData() {
      try {
        const response = await fetch(
          `/api/contests/${contestId}`,
          requestOptionsGET,
        );
        if (response.ok) {
          const result = await response.json();
          setContestData(result);
          setIsPending(false);
        } else {
          throw Error(generateErrorMessage(response.status));
        }
      } catch (error) {
        setFetchErrors(error.message);
      }
    }
    fetchContestData();
  }, []);

  useEffect(() => {
    width > 1024 && setToggle(true);
  }, [width]);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const openCloseContestModal = () => {
    setIsCloseContestModalOpen(true);
  };

  function closeModalHandler() {
    setIsCloseContestModalOpen(false);
  }

  const handleReminder = (event) => {
    event.preventDefault();
    setIsCloseContestModalOpen(false);
    handleSubmit(event);
    navigate('/contests');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const enterCompetition = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_FIELD',
      fieldName: 'userNameConfirmed',
      payload: null,
    });
    dispatch({
      type: 'UPDATE_FIELD',
      fieldName: 'selectedClass',
      payload: null,
    });
    navigate('/user-dogs');
  };

  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
      ) : (
        <>
    <ColumnWrapper
      className="contest-data grid-position"
      contentPosition={isAuthenticated}
    >
      {isCloseContestModalOpen && (
        <Modal
          modalData={modalData.cancelContest}
          onCloseHandler={handleReminder}
          onConfirmHandler={handleReminder}
        />
      )}
      {isCloseContestModalOpen && <Backdrop onClick={closeModalHandler} />}

      {isPending && <Spinner />}
      {/* {contestData && <ContestDetailsMap />} */}
      {contestData && (
        <>
          <ContestDetailsMap />
          <div>
            <ContestDetailsToggler onClick={toggleHandler} toggle={toggle} />
            {toggle && <ContestDetailsContent contestData={contestData} />}
            <ContestDetailsEmptyBarStyled />
            {state && state.selectedRole === 'participant' && (
              <ColumnWrapper className="contest-data-buttons">
                <FakeButton
                  colors="ternary"
                  text="WRÓĆ DO LISTY ZAWODÓW"
                  state={{
                    contestContent: 'future',
                  }}
                  to="/future-contests"
                  className="contest-data-button-back"
                />
                <MainButton
                  secondary
                  text="ZGŁOŚ SWÓJ UDZIAŁ"
                  to="/user-dogs"
                  className="contest-data-button-enter"
                  onClick={enterCompetition}
                />
              </ColumnWrapper>
            )}{' '}
            {state && state.selectedRole === 'manager' && (
              <ColumnWrapper className="contest-data-buttons-manager">
                <FakeButton
                  colors="secondary"
                  text="Edytuj dane"
                  to="/add-contest"
                />
                <MainButton
                  secondary
                  text="Odwołaj i usuń zawody"
                  onClick={openCloseContestModal}
                />
                <FakeButton
                  colors="secondary"
                  text="Wróć do listy"
                  to="/contests"
                />
              </ColumnWrapper>
            )}
          </div>
        </>
      )}
    </ColumnWrapper>
        </>
      )}
    </>
  );
};

ContestDetails.propTypes = {
  contestId: PropTypes.string,
};

export default ContestDetails;
