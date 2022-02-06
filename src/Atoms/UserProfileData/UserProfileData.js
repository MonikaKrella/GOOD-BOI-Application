import propTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserProfileDataStyled from './UserProfileDataStyled';
import participants from '../../Data/MongoDBMock/participants';
import { UserDataContext } from '../../Context/UserDataContext';

const initialData = {
  address: {
    country: 'Polska',
    city: 'Sfornegacie',
    street: 'ul.Pszczelna',
    numberOfHouse: '27/5',
    postalCode: '50-124',
  },
};

const UserProfileData = () => {
  const navigate = useNavigate();
  const { state } = useContext(UserDataContext);
  const { userId, userName, userSurname, isAuthenticated } = state;
  const [userObject, setUserObject] = useState(initialData);

  // mock for checking authentication and if userId is in database

  // const { pathname } = useLocation();

  // if (!isAuthenticated) {
  //   try {
  //     const userId = pathname.split('/').pop();

  //     const userObject = participants.find(
  //       (participant) => participant.participantId === userId,
  //     );
  //     dispatch({ type: 'LOG_IN' });
  //     setUserObject(userObject);
  //   } catch (err) {
  //     throw new Error('Your not allowed to be here!');
  //   }
  // }

  const { address } = userObject;
  const { street, numberOfHouse, city, postalCode } = address;

  // mock for fetching data from database and checking if response has data

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    const userObject = participants.find(
      (participant) => participant.participantId === userId,
    );
    if (!userObject) {
      throw new Error('Fetch was unsuccessful');
    } else {
      setUserObject(userObject);
    }
  }, []);

  return (
    <UserProfileDataStyled>
      <h3>{`${userName} ${userSurname}`}</h3>
      <p>{`${street} ${numberOfHouse}`}</p>
      <p>{`${postalCode} ${city}`}</p>
    </UserProfileDataStyled>
  );
};

UserProfileData.propTypes = {
  userData: propTypes.shape({
    isAuthenticated: propTypes.bool.isRequired,
    userId: propTypes.string.isRequired,
    userName: propTypes.string,
    userSurname: propTypes.string,
    roles: propTypes.arrayOf(propTypes.string),
  }),
};

export default UserProfileData;
