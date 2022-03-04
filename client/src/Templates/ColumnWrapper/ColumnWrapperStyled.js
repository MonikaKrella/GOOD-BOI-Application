import styled from 'styled-components';

const ColumnWrapperStyled = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.paddingLeftRight &&
    `0 ${props.paddingLeftRight}rem 0 0${props.paddingLeftRight}rem`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}rem`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}rem`};

  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
    /* overflow: scroll; */
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default ColumnWrapperStyled;
