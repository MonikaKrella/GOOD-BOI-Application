import { useLocation, useNavigate } from 'react-router-dom';

import AppLogo from '../../Assets/AppLogo.png';
import { BsChevronLeft } from 'react-icons/bs';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';
import LinkWrapperStyled from '../../Atoms/NavElementStyled/LinkWrapperStyled';
import LogoStyled from '../../Atoms/NavElementStyled/LogoStyled';
import { NavElementStyled } from './NavElementStyled';
import PropTypes from 'prop-types';
import pathData from '../../Consts/pathData';

const NavElement = () => {
  const navigate = useNavigate();
  // const { name } = useParams();
  const locationPath = useLocation();
  console.log(locationPath);
  const foundPath = pathData.find((e) => e.path === locationPath.pathname);

  return (
    <>
      <NavElementStyled>
        <LinkWrapperStyled onClick={() => navigate(-1)}>
          <BsChevronLeft className="arrowLeft" />

          <h3 className="back">wróć</h3>
        </LinkWrapperStyled>

        {foundPath.path === locationPath.pathname && (
          <h1 className="navText">{foundPath.text}</h1>
        )}
        <LogoStyled>
          <img src={AppLogo} alt="Logo aplikacji" className="logo" />
        </LogoStyled>
      </NavElementStyled>
      {foundPath.label !== undefined && (
        <>
          <div style={{ height: '60px' }} />
          <GreyLabel text={foundPath.label} />
        </>
      )}
    </>
  );
};

NavElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavElement;
