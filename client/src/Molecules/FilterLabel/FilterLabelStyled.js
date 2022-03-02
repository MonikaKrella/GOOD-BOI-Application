import styled from 'styled-components';

const FilterLabelStyled = styled.label`
  display: flex;
  width: 100%;

  div {
    display: flex;
    width: 100%;
    height: 2.43rem;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.grey100};

    @media (min-width: 1200px) {
      .innerWrapper {
        width: 600px;
      }
    }
  }
`;

export default FilterLabelStyled;
