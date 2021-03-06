import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import GlobalStyle from "./styles/globaStyles";
import { Provider } from "react-redux";
import store from "./modules/redux/store";
import swal from "sweetalert";

import Header from "./components/public/header";
import Main from "./components/Main";
import Signin from "./components/login/signin";
import Signup from "./components/login/singup";
import Record from "./components/record";
import Storage from "./components/storage";
import Mypage from "./components/Mypage";
import OtherUser from "./components/otherUser";

const App = () => {


  return (
    <Provider store={store}>
      <Router>
      <GlobalStyle />
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <>
            <Header />
            <Route exact path="/mypage" component={Mypage} />
            <Route exact path="/other" component={OtherUser} />
            <Route exact path="/" component={Main} />
            <Route exact path="/storage" component={Storage} />
            <Route exact path="/record" component={Record} />
          </>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
