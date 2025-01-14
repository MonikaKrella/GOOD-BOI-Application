import { useContext, useEffect, useState } from 'react';

import { DogContext } from '../../Context/DogContext';
import DogData from '../../Organisms/DogData/DogData';
import Spinner from '../../Atoms/Spinner/Spinner';
import { useParams } from 'react-router-dom';

const DogDataPage = () => {
  const { dogId: dogIdParams } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [dogId, setDogId] = useState(null);
  const { chosenDog } = useContext(DogContext);

  useEffect(() => {
    if (chosenDog.dogId) {
      setDogId(chosenDog.dogId);
    } else if (dogIdParams) {
      setDogId(dogIdParams);
    }
    setIsPending(false);
  }, []);

  return (
    <>
      {isPending && <Spinner />}
      {dogId && <DogData id={dogId} />}
    </>
  );
};

export default DogDataPage;
