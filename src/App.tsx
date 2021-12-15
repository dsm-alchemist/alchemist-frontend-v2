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
import Ranking from "./components/ranking";
import Mypage from "./components/Mypage";
import OtherUser from "./components/otherUser";
import axios from "axios";

const App = () => {

  const available = 5;
  const access = window.localStorage.getItem("alchemist_access_token");

  useEffect(() => {


    const timerId = setTimeout(async () => {
      try{
        const res = await axios({
          method: "PUT",
          url: "http://52.79.148.224:8080/refresh",
          headers: {},
          data: {
            "refreshToken": localStorage.getItem("alchemist_refresh_token")
          },
        }); 
        const {accessToken, refreshToken} = res.data;
        localStorage.setItem("alchemist_access_token", accessToken);
        localStorage.setItem("alchemist_refresh_token", refreshToken);
      }catch (err) {
        console.log(err);
        swal({
          title: "로그인이 만료되었습니다.",
          icon: "error"
        }).then(function() {
          window.location.href = "/signin"
        });
      }
    }, available);
    return () => clearTimeout(timerId);
  }, [access])

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
            <Route exact path="/ranking" component={Ranking} />
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
