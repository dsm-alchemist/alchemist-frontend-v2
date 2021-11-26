import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import GlobalStyle from "./styles/globaStyles";

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes></Routes>
    </Router>
    </>
  );
}

export default App;
