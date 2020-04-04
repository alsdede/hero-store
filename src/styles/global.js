import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto,sans-serif;
  }

  #root {
    width: 100%;
    max-width: 1366px !important;
    margin:0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
