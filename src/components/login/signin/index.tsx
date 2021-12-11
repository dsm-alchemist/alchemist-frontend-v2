import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Welcome } from "../../../assets";
import { useHistory } from "react-router-dom";
import {ACCESS_TOKEN, REFRESH_TOKEN, requestWithOutAccessToken} from "../../../utils/api/axios";
import swal from "sweetalert";

interface SigninProps{
    id: string;
    password: string;
}

const Signin = () => {

    useEffect(() => {
        idInput.current.focus();
    }, [])

    const history = useHistory();

    const [data, setData] = useState<SigninProps>({
        id: "",
        password: "",
    });

    const {id, password} = data;

    const idChange = (e:any) => {
        setData({
            ...data,
            id: e.target.value,
        });
    };

    const pwChange = (e: any) => {
        setData({
            ...data,
            password: e.target.value,
        });
    };

    const onKeyGo = (e: any) => {
        if(e.key === "Enter"){
            SigninBtn();
        }
    }

    const idInput = useRef<any>();

    const SigninBtn = () => {
        if(id.length == 0) {
            swal({
                text: "아이디를 입력해 주세요",
                icon: "error",
                dangerMode: true,
            })
            return false;
        }
        else if(password.length == 0) {
            swal({
                text: "비밀번호를 입력해 주세요",
                icon: "error",
                dangerMode: true,
            })
            return false;
        }
        else{
            requestWithOutAccessToken({
                method: "POST",
                url: "/login",
                headers: {},
                data: {
                    "email": id,
                    "password": password
                }
            }).then((res) => {
                console.log(res.data);
                localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
                localStorage.setItem(REFRESH_TOKEN, res.data.refreshToken);
                swal({
                    title: "로그인 완료!",
                    text: "메인페이지로 이동합니다.",
                    icon: "success",
                })
                history.push("/");
            }).catch((err) => {
                console.log(err);
                swal({
                    text: "아이디나 비밀번호를 잘못 입력 하셨습니다.",
                    icon: "error",
                    dangerMode: true,
                })
            })
        }
    }
    
    return(
        <S.Wrapper onKeyPress={onKeyGo}>
            <S.Modal>
                <Welcome />
                <S.Wrap>
                    <S.InputBox>
                            <p>email</p>
                            <input ref={idInput} type="text" onChange={idChange} placeholder="이메일을 입력해주세요" />
                    </S.InputBox>
                    <S.InputBox>
                            <p>password</p>
                            <input type="password" onChange={pwChange} placeholder="비밀번호를 입력해주세요" />
                    </S.InputBox>
                </S.Wrap>
                <S.Btn onClick={SigninBtn}>Login</S.Btn>
                <p className="goP">if you don't have account <span onClick={() => history.push("/signup")} className="goSpan">Click here</span></p>
            </S.Modal>

        </S.Wrapper>
    )
}

export default Signin;