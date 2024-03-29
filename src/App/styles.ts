import styled, { createGlobalStyle } from 'styled-components';
import zIndices from '../common/zIndices';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    margin: 0;

    overflow: hidden;
  }

  * {
    &, &::before, &::after {
      box-sizing: border-box;
    }
  }

  body {
    font: 16px Rubik;
    color: #161F6A;
    background-color: #FFFFFF;
    height: 100%;
  }

  input {
    color: inherit;
  }
  a {
    text-decoration: none;
  }

  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type=number] {
      -moz-appearance:textfield;
  }
`;

export const AppContainer = styled.div`
  z-index: ${zIndices.appContainer};
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const ModalsContainer = styled.div`
  z-index: ${zIndices.modalsContainer};
  position: fixed;
  top: 0;
  left: 0;
`;

export const AlertsContainer = styled.div`
  z-index: ${zIndices.alertsContainer};
  position: fixed;
  top: 0;
  left: 0;
`;
