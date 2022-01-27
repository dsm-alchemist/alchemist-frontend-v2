import React, { useEffect } from "react";
import * as S from "./styles";
import {MainLogo, ImgLogo, MobileLogo} from "../../../assets/index";
import { useHistory } from "react-router-dom";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../utils/api/axios";
import swal from "sweetalert2";

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
            swal.fire({
                title: "로그아웃 하시겠습니까?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "예",
                cancelButtonText: "아니오",
                focusConfirm: false,
                focusCancel: true
            }).then((result) => {
                if(result.isConfirmed){
                    history.push("/signin");
                    localStorage.clear();
                }else{
                    return;
                }
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    return(
        <S.Wrapper>
            <S.Left>
                {/* <img className="mobileLogo" src={MobileLogo} alt="" /> */}
                <img className="logo" onClick={() => history.push("/")} src={MainLogo} alt="" />
            </S.Left>
            <S.Right>
                <ul>
                    <li onClick={() => history.push("/record")}>timer</li>
                    <li onClick={() => history.push('/mypage')}>my page</li>
                    <li onClick={() => history.push('/storage')}>storage</li>
                    {
                        localStorage.getItem("email")?.length == null ?
                            <li style={{color: "#2c36ff"}} onClick={() => history.push("/signin")}>signin</li>
                                :
                            <li style={{color: "#ff5a5a"}} onClick={() => logout()}>logout</li>
                    }
                </ul>
            </S.Right>
        </S.Wrapper>
    )
}

export default Header;