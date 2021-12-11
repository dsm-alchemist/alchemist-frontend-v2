import React, { useEffect, useRef, useState } from "react";
import { Welcome } from "../../../assets";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import {requestWithOutAccessToken} from "../../../utils/api/axios";

interface SignupProps{
    id: string;
    email_ck: string;
    password: string;
    nickname: string;
    emailCheck: boolean;
    nameCheck: boolean;
}

const Signup = () => {

    const history = useHistory();

    const [data, setData] = useState<SignupProps>({
        id: "",
        email_ck: "",
        password: "",
        nickname: "",
        emailCheck: false,
        nameCheck: false,
    });

    const {id, email_ck, password, nickname, emailCheck, nameCheck} = data;

    const emailCode = (e: any) => {
        setData({
            ...data,
            email_ck: e.target.value
        });
    };

    const idChange = (e: any) => {
        setData({
            ...data,
            id: e.target.value
        });
    };  

    const nameChange = (e:any) => {
        setData({
            ...data,
            nickname: e.target.value
        });
    };

    const pwChange = (e: any) => {
        setData({
            ...data,
            password: e.target.value
        });
    };  

    const onKeyGo = (e: any) => {
        if(e.key === "Enter"){
            signupBtn();
        }
    }

    const emailCk = async(e: any) => {
        await requestWithOutAccessToken({
            method: "GET",
            url: `/reduplication/email/${id}`,
            headers: {},
            data: {},
        }).then((res) => {
            console.log(res.data + "emailCheck");
            emailCodeSend();
        }).catch((err) => {
            console.log(err);
        })
    }

    const emailCodeSend = () => {
        requestWithOutAccessToken({
            method: "POST",
            url: "/sms-certification/sends",
            headers: {},
            data: {
                "email": id
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        })
    };


    const nameCk = async(e: any) => {
        requestWithOutAccessToken({
            method: "GET",
            url: `/reduplication/name/${nickname}`,
            headers: {},
            data: {},
        }).then((res) => {
            console.log(res.data);
            setData({
                ...data, 
                nameCheck: true
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    
    const emailCodeCheck = async(e: any) => {
        await requestWithOutAccessToken({
            method: "GET",
            url: `/sms-certification/confirms/${email_ck}`,
            headers: {},
            data: {}
        }).then((res) => {
            console.log(res);
            setData({
                ...data,
                emailCheck: true
            });
        }).catch((err) => {
            console.log(err);
        })
    }

    const nameInput = useRef<any>();
    const emailInput = useRef<any>();

    const signupBtn = () => {
        if (!nameCheck) {
            alert("이름 중복확인을 해주세요!");
            nameInput.current.focus();
            return false;
        }
        else if(!emailCheck) {
            alert("이메일 인증을 완료해 주세요");
            emailInput.current.focus();
            return false;
        }
        else{
            requestWithOutAccessToken({
                method: "POST",
                url: "/signup",
                headers: {},
                data: {
                    "email": id,
                    "password": password,
                    "name": nickname,
                }
            }).then((res) => {
                console.log(res);
                alert("회원가입 완료. 로그인 페이지로 이동합니다.");
                history.push("/signin");
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return(
        <S.Wrapper onKeyPress={onKeyGo}>
            <S.Modal>
                <Welcome />
                <S.Wrap>
                    <S.Verify>
                        <S.InputBox>
                            <p>email</p>
                            <input  type="text" ref={emailInput} onChange={idChange} placeholder="이메일을 입력해주세요" />
                        </S.InputBox>
                        <button className="send" onClick={emailCk}>인증코드 발송</button>
                    </S.Verify>
                    <S.Verify>
                        <S.InputBox>
                            <p>emai check</p>
                            <input type="text" onChange={emailCode} placeholder="인증번호를 입력해주세요" />
                        </S.InputBox>
                        <button className="send" onClick={emailCodeCheck}>인증코드 확인</button>
                    </S.Verify>
                    <S.Verify>
                        <S.InputBox>
                            <p>name</p>
                            <input type="text" ref={nameInput} onChange={nameChange} placeholder="이름을 입력해주세요" />
                        </S.InputBox>
                        <button className="send" onClick={nameCk}>이름 중복확인</button>
                    </S.Verify>
                    <S.InputBox>
                            <p>password</p>
                            <input type="text" onChange={pwChange} placeholder="비밀번호를 입력해주세요" />
                    </S.InputBox>
                </S.Wrap>
                <S.Btn onClick={signupBtn}>Signup</S.Btn>
            </S.Modal>
        </S.Wrapper>
    )
}

export default Signup;