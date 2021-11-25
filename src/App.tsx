import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import GlobalStyle from "./styles/globaStyles";

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Switch></Switch>
    </Router>
    </>
  );
}

export default App;
