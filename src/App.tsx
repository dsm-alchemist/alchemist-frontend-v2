import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import GlobalStyle from "./styles/globaStyles";
import { Provider } from "react-redux";
import store from "./modules/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch></Switch>
      </Router>
    </Provider>
  );
}

export default App;
