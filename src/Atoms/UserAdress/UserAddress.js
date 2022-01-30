import propTypes from 'prop-types';

import PARTICIPANTS from '../../Data/Dummy-data/test-data-participants';
import UserAddressStyled from './UserAddressStyled';

const UserAddress = ({ withEdit }) => {
  // userId otrzymane z contextu lub propsa

  // TODO co w przypadku kiedy nie znajdziemy id ?

  const userId = '1a0b079c-3d93-4fc0-a391-114e0f1d2004';
  let userObject = PARTICIPANTS.find(
    (participant) => participant.id === userId,
  );
  return (
    <UserAddressStyled>
      <div className="address-container">
        <p>{`${userObject.street} ${userObject.numberOfHosue}`}</p>
        <p>{`${userObject.postalCode} ${userObject.city}`}</p>
      </div>
      {withEdit && <button className="edit-btn">edytuj dane</button>}
    </UserAddressStyled>
  );
};

UserAddress.propTypes = {
  withEdit: propTypes.bool,
};

export default UserAddress;
