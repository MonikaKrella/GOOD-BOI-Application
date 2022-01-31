import propTypes from 'prop-types';

import FooterProfileButton from '../../Atoms/FooterProfileButton/FooterProfileButton';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import { Copy, DevsLogo, FooterStyled, LogoStyled } from './FooterStyled';

const Footer = ({ withSettings }) => {
  return (
    <FooterStyled>
      <LogoStyled>
        <DevsLogo>
          <img
            className="logo"
            src={logoDevsOnTheWaves}
            alt="logo"
            width="35px"
          />
        </DevsLogo>
        <Copy>
          Copyright <br />
          #Devs on the Waves
        </Copy>
      </LogoStyled>

      {withSettings ? (
        <FooterProfileButton withSettings />
      ) : (
        <FooterProfileButton />
      )}
    </FooterStyled>
  );
};

Footer.propTypes = {
  withSettings: propTypes.bool,
};

export default Footer;
