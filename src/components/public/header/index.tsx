import React, { useEffect } from "react";
import * as S from "./styles";
import {Logo, ImgLogo} from "../../../assets/index";
import { useHistory } from "react-router-dom";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../utils/api/axios";
import axios from "axios";

import swal from "sweetalert";

const Header = () => {

    const history = useHistory();
    
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
            console.log("dlfeks dlrjs ehla");
            window.location.reload();
          }catch (err) {
            console.log(err);
            console.log("dlfeks dlrjs ehla2")
            swal({
              title: "로그인이 만료되었습니다.",
              icon: "error"
            }).then(function() {
              window.location.href = "/signin";
              localStorage.clear();
            });
          }
        }, 7200000);
        return () => clearTimeout(timerId);
      }, [])

    const logout = () => {
        requestWithAccessToken({
            method: "POST",
            url: "/logout",
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res);
            swal({
                title: "logout!",
                icon: "success"
            }).then(() => {
                history.push("/signin");
                localStorage.clear();
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    return(
        <S.Wrapper>
            <S.Left>
                <Logo />
            </S.Left>
            <S.Right>
                <ul>
                    <li onClick={() => history.push("/ranking")}>ranking</li>
                    <li onClick={() => history.push("/record")}>timer</li>
                    <li onClick={() => history.push('mypage')}>my page</li>
                    {
                        localStorage.getItem("email")?.length == null ?
                            <li style={{color: "#2c36ff"}} onClick={() => history.push("/signin")}>signin</li>
                                :
                            <li style={{color: "#ff5a5a"}} onClick={() => logout()}>logout</li>
                    }
                </ul>
                <ImgLogo />
            </S.Right>
        </S.Wrapper>
    )
}

export default Header;