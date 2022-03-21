import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const ColumnWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.paddingLeftRight &&
    `0 ${props.paddingLeftRight}rem 0 0${props.paddingLeftRight}rem`};
  padding-top: ${(props) => props.paddingTop && `${props.paddingTop}rem`};
  padding-bottom: ${(props) =>
    props.paddingBottom && `${props.paddingBottom}rem`};
  grid-area: 3 / 1 / 4 / 2;

  &.not-found-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 35rem;
    margin: 0 auto;
    padding-top: 1.25rem;

    .main-content-wrapper {
      display: flex;
      width: 16.25rem;
      height: 7.5rem;
      flex-direction: column;
      justify-content: space-between;
      margin: 2.1875rem 0 4.25rem;

      h2 {
        color: ${({ theme }) => theme.grey800};
        ${FONTS.h2}
      }

      p {
        color: ${({ theme }) => theme.grey800};
        ${FONTS.caption}
      }
    }
    .buttons-wrapper {
      width: 100%;
    }
  }
  .incoming-contests {
    margin: 3.75rem 0 0 0;
    color: ${({ theme }) => theme.grey800};
    text-align: left;
  }
  .login-form-captions {
    display: none;
    color: ${({ theme }) => theme.grey800};
    ${FONTS.caption};
    text-align: left;
    margin: 0.5rem;
  }
  .login-form-header {
    ${FONTS.h2};
    line-height: 2.5;
  }
  .login-form-centered {
    text-align: center;
  }
  &.manager-page {
    padding: 2.2rem 1rem 0 1rem;
    margin: 0 auto;
  }
  &.register-form-column-wrapper,
  &.contest-form-column-wrapper,
  &.role-page-column-wrapper {
    margin: 0 auto;
  }
  .login-form-captions {
    display: none;
    color: ${({ theme }) => theme.grey800};
    ${FONTS.caption};
    text-align: left;
    margin: 0.5rem;
  }
  .login-form-header {
    ${FONTS.h2};
    line-height: 2.5;
  }
  .login-form-centered {
    text-align: center;
  }

  &.contest-data-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  @media only screen and (min-width: 800px) {
    grid-area: 3 / 2 / 4 / 3;
    margin: 0 auto;
    max-width: ${(props) =>
      props.maxWidthBigScreen && `${props.maxWidthBigScreen}rem`};
    align-items: ${(props) => props.alignItems && `${props.alignItems}`};

    &.user-dogs-column-wrapper {
      align-items: flex-end;
    }
    &.user-profile {
      gap: 1.25rem;
    }
    &.contests-column-wrapper {
      display: flex;
      max-width: 42.5rem;
      margin: 1.5625rem 0 0 0;
    }
    &.user-data-wrapper {
      border: 1px solid ${({ theme }) => theme.grey200};
      border-radius: 0.9375rem;
      margin: 0 auto;
      height: fit-content;
    }
    &.not-found-wrapper,
    &.forgot-wrapper {
      grid-area: 3 / 1 / 4 / 3;
      grid-column-start: ${(props) => props.isAuthenticated && 2};
    }
    &.login-column-wrapper {
      max-width: 470px;
      border: 1px solid ${({ theme }) => theme.grey200};
      border-radius: 0.9375rem;
      padding: 1.875rem;
      margin: auto;
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.grey800};
    }
  }
  @media only screen and (min-width: 1024px) {
    &.login-column-wrapper {
      max-width: 470px;
      border: 1px solid ${({ theme }) => theme.grey200};
      border-radius: 0.9375rem;
      padding: 1.875rem;
      margin: auto;
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.grey800};
      .login-form-captions {
        display: block;
      }
    }
    &.user-dogs-column-wrapper {
      align-items: center;
    }

    .login-form-captions {
      display: block;
    }
    @media only screen and (min-width: 1024px) {
      &.user-dogs-column-wrapper {
        align-items: center;
      }

      &.user-profile {
        display: grid;
        height: 100%;
        align-items: center;
        gap: 1.25rem;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(2, 10.625rem) 1fr;
      }
      &.user-data-wrapper {
        margin: 0 auto;
        margin-bottom: 1rem;
      }
      &.contests-column-wrapper {
        display: flex;
        max-width: 42.5rem;
        margin: 1.5625rem 0 0 0;
      }
      &.login-column-wrapper {
        max-width: 29.375rem;
        border: 1px solid ${({ theme }) => theme.grey200};
        border-radius: 0.9375rem;
        margin: auto;
      }
      .login-form-captions {
        display: block;
        background-color: ${({ theme }) => theme.white};
      }

      @media only screen and (min-width: 1600px) {
        grid-area: 3 / 3 / 4 / 4;
      }
    }
    &.contest-data {
      display: grid;
      height: 100%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
    &.contest-data-details {
      grid-area: 1/1/2/2;
    }
    &.contest-data-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem;
    }
    &.login-column-wrapper {
      max-width: 29.375rem;
      border: 1px solid ${({ theme }) => theme.grey200};
      border-radius: 0.9375rem;
      margin: auto;
    }
    .login-form-captions {
      display: block;
      background-color: ${({ theme }) => theme.white};
    }

    &.contest-data {
      display: grid;
      height: 100%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
    &.contest-data-details {
      grid-area: 1/1/2/2;
    }
    &.contest-data-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem;
    }
  }
  @media only screen and (min-width: 1600px) {
    grid-area: 3 / 3 / 4 / 4;
    &.not-found-wrapper,
    &.user-data-wrapper,
    &.forgot-wrapper {
      grid-area: 3 / 3 / 4 / 4;
    }
  }
`;

export default ColumnWrapperStyled;
