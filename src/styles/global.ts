

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

export const ContainerResult = styled(Container)`
  background-color: #DCF5F2;
  width: 100%;
  height: 200px;

  gap: 16px;
  padding: 0;
  margin: 0;

  .price {
    background-color: #00A38C;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 30px;
  }

  span {
    font-size: 12px;
    color: #9BA7A2;
  }
`;
