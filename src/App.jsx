import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Home from "./Home";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif; 
  }
  body{
    background-color: #b79393;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
