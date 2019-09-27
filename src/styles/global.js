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
    height: 100%;
  }

  body {
    -webkit--font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px Roboto, Arial, Helvetica, sans-serif;
    color: #222;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border: none;
  }

  iframe, img {
    max-width: 100%;
    height: auto;
  }
`;
