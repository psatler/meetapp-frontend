import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  /* removing outline for all elements that have focus */
  *:focus {
    outline: 0;
  }

  /* to fill the maximum height of the screen */
  html, body, #root {
    height: 100%;
  }

  /* to let the fonts better defined  */
  body {
    -webkit-font-smoothing: antialiased;
  }

  /* adding input and button because they do not inheret the font from the body */
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
