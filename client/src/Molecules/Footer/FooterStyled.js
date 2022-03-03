import styled from 'styled-components';

export const FooterStyled = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 4.875rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-top: 2px solid ${({ theme }) => theme.grey00};
  margin: 0 auto;
  background: ${({ theme }) => theme.white};

  @media only screen and (min-width: 800px) {
    border: none;
    position: unset;
    height: 120px;
    max-width: 1600px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.grey200};
  }

  @media only screen and (min-width: 1600px) {
    height: 240px;
    max-width: 1600px;
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  pointer-events: none;
`;

export const DevsLogo = styled.div`
  align-self: center;
`;

export const Copy = styled.div`
  align-self: center;
  margin: 0 0 0 10px;
  color: ${({ theme }) => theme.grey800};
  font-size: 0.75rem;
  text-align: left;
`;
