import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';

const LeaderboardListElementStyled = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  min-height: 3rem;
  color: black;
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #9aa5b1;
  /* font-size: 15px;
  font-weight: 600; */
  ${FONTS.body_semibold};
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #f5f5f5;
  }
  // if you put selectors in without the ampersand, they will refer to children of the component //
  .justifyLeft {
    margin-left: 1rem;
    text-align: left;
  }
  .justifyRight {
    margin-right: 1rem;
  }
`;

export default LeaderboardListElementStyled;
