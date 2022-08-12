

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #F9F6FC;
    font-size: 16px;
    color: #222;
  }

  button {
    cursor: pointer;
  }
`;