

import styled, { createGlobalStyle } from 'styled-components';

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
  
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 48px;
  padding: 0 16px;
`;