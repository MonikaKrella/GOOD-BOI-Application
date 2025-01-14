import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import DataLine from '../../Atoms/DataLine/DataLine';
import ErrorComponent from '../../PagesBody/ErrorPage/ErrorComponent';
import SpecialButton from '../../Atoms/SpecialButton/SpecialButton';
import SpecialButtonsContainerStyled from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainerStyled';
import Spinner from '../../Atoms/Spinner/Spinner';
import renderDogData from '../../Tools/renderDogData';
import { ContestContext } from '../../Context/ContestContext';
import { DogContext } from '../../Context/DogContext';
import { UserDataContext } from '../../Context/UserDataContext';
import { generateErrorMessage } from '../../Tools/generateErrorMessage';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import enterCompetitionAddClass from '../EnterCompetitionContainer/enterCompetitionAddClass';
import EnterCompetitionContainer from '../EnterCompetitionContainer/EnterCompetitionContainer';

const DogData = ({ id }) => {
  let navigate = useNavigate();
  const [fetchErrors, setFetchErrors] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const { state } = useContext(UserDataContext);
  const { setChosenDog, chosenDog } = useContext(DogContext);
  const { contestState } = useContext(ContestContext);

  useEffect(() => {
    async function fetchDogData() {
      try {
        let response = await fetch(`/api/dogs/${id}`, requestOptionsGET);
        if (response.ok) {
          response = await response.json();
          setDogData(response);
          setIsPending(false);
        } else {
          throw Error(generateErrorMessage(response.status));
        }
      } catch (error) {
        setFetchErrors(error.message);
      }
    }

    fetchDogData();
  }, []);

  const handleEdit = (event) => {
    event.preventDefault();
    navigate(`/add-dog-form/`, {
      state: {
        text: 'Formularz - edycja',
        label: `${dogData.dogName}`,
      },
    });
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    chosenDog &&
      contestState.contestId &&
      navigate(`/participant-data/${state.userId}`, {
        state: {
          text: 'Dane zawodnika',
          label: `${state.userName} ${state.userSurname}`,
          participantId: state.userId,
        },
      });
    setChosenDog(() => {
      return {
        dogId: id,
        dogName: dogData.dogName,
        dogPkr: dogData.pkr,
      };
    });
    chosenDog && !contestState.contestId && navigate(`/user-dogs`);
  };

  const enterCompetitionDogData = () => {
    return chosenDog !== {} && contestState.contestId !== null
      ? '-enter-competition'
      : '';
  };

  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
      ) : (
        <>
          <ColumnWrapper className={`dog-data${enterCompetitionDogData()}`}>
            <ColumnWrapper
              className={`dog-data-container${enterCompetitionDogData()}`}
            >
              <SpecialButtonsContainerStyled>
                <SpecialButton
                  left
                  text="edytuj"
                  handler={handleEdit}
                  colors="blue"
                />
                <SpecialButton
                  right
                  text={
                    contestState.contestId ? 'potwierdź' : 'wróć do listy psów'
                  }
                  handler={handleConfirm}
                  colors="green"
                />
              </SpecialButtonsContainerStyled>
              <ColumnWrapper paddingLeftRight={1} className="dog-data-details">
                {isPending && <Spinner />}
                {dogData &&
                  Object.entries(renderDogData(dogData)).map(
                    (dataLine, index) => (
                      <DataLine key={index} text={dataLine} />
                    ),
                  )}
              </ColumnWrapper>
              <ColumnWrapper
                paddingLeftRight={1}
                className="dog-data-details-bar"
              >
                Dane psa
              </ColumnWrapper>
            </ColumnWrapper>
            {contestState.contestId !== null && <EnterCompetitionContainer />}
          </ColumnWrapper>
        </>
      )}
    </>
  );
};
DogData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DogData;
