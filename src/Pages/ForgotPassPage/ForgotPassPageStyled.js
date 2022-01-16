import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const StyledForgotPassForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    color: ${COLORS.grey800};
    ${FONTS.label_regular};
    align-self: flex-start;
    padding: 2em 0 10px 10px;
  }

  input {
    font-family: Mulish, FontAwesome;
    color: ${COLORS.grey800};
    ${FONTS.body_semibold};
    height: 48px;
    border-radius: 8px;
    border: 0.5px solid ${COLORS.grey400};
    padding-left: 10px;
    margin: 0 0 1rem 0;

    &::placeholder {
      color: ${COLORS.grey400};
    }
    &:focus {
      border: 0.5px solid transparent;
      outline: 3px solid ${COLORS.primary201};
    }
  }
`;

export default StyledForgotPassForm;
