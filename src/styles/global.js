import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    -webkit--font-smoothing: antialiased !important;
  }

  input, button {
    font-size: 14px;
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  img {
    vertical-align: middle;
    border: none;
  }

`;
