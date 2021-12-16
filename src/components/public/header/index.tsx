import React, { useEffect } from "react";
import * as S from "./styles";
import {Logo, ImgLogo} from "../../../assets/index";
import { useHistory } from "react-router-dom";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../utils/api/axios";
import axios from "axios";

import swal from "sweetalert";

const Header = () => {

    const history = useHistory();

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