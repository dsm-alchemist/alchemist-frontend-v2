import React, { useEffect, useRef, useState } from "react";
import { Welcome } from "../../../assets";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import {requestWithOutAccessToken} from "../../../utils/api/axios";
import swal from "sweetalert";

interface SignupProps{
    id: string;
    email_ck: string;
    password: string;
    nickname: string;
    emailCheck: boolean;
    nameCheck: boolean;
}

const Signup = () => {
    
    useEffect(() => {
        idInput.current.focus();
    }, []);

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
        if(id.length === 0) {
            swal({
                text: "이메일은 빈칸일 수 없습니다",
                icon: "error",
                dangerMode: true,
            })
        }
        else if(!id.includes("@gmail.com")){
            swal({
                text: "이메일은 gmail만 가능합니다.",
                icon: "error",
                dangerMode: true,
            })
            return false;
        }
        else{
            await requestWithOutAccessToken({
                method: "GET",
                url: `/reduplication/email/${id}`,
                headers: {},
                data: {},
            }).then((res) => {
                console.log(res.data);
                emailCodeSend();
            }).catch((err) => {
                console.log(err);
            })
        }   
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
        if(nickname.length < 2 || nickname.length > 10){
            swal({
                text: "이름은 두글자 이상 10글자 이하입니다.",
                icon: "error",
                dangerMode: true,
            })
            return false;
        }
        else{
            requestWithOutAccessToken({
                method: "GET",
                url: `/reduplication/name/${nickname}`,
                headers: {},
                data: {},
            }).then((res) => {
                console.log(nickname.length);
                setData({
                    ...data,    
                    nameCheck: true
                });
                swal({
                    title: "사용 가능한 이름입니다.",
                    icon: "success",
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    
    const emailCodeCheck = async(e: any) => {
        await requestWithOutAccessToken({
            method: "GET",
            url: `/sms-certification/confirms?code=${email_ck}&email=${id}`,
            headers: {},
            data: {}
        }).then((res) => {
            console.log(res);
            setData({
                ...data,
                emailCheck: true
            });
            swal({
                title: "이메일 인증 완료",
                icon: "success",
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    const idInput = useRef<any>();

    const signupBtn = () => {
        if(!emailCheck) {
            swal({
                text: "먼저 이메일 인증을 완료해 주세요.",
                icon: "error",
                dangerMode: true,
            })
            return false;
        }
        else if (!nameCheck) {
            swal({
                text: "이름 중복 확인을 완료해 주세요",
                icon: "error",
                dangerMode: true,
            });
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
                swal({
                    title: "회원가입 성공!",
                    text: "로그인 페이지로 이동합니다.",
                    icon: "success",
                });
                history.push("/signin");
            }).catch((err) => {
                console.log(err);
                swal({
                    text: "회원가입에 실패했습니다.",
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
                    <S.Verify>
                        <S.InputBox>
                            <p>email</p>
                            <input  type="text" ref={idInput} onChange={idChange} placeholder="이메일을 입력해주세요 (gmail만 가능)" />
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
                            <input type="text" onChange={nameChange} placeholder="이름을 입력해주세요" />
                        </S.InputBox>
                        <button className="send" onClick={nameCk}>이름 중복확인</button>
                    </S.Verify>
                    <S.InputBox>
                            <p>password</p>
                            <input type="password" onChange={pwChange} placeholder="비밀번호를 입력해주세요" />
                    </S.InputBox>
                </S.Wrap>
                <S.Btn onClick={signupBtn}>Signup</S.Btn>
            </S.Modal>
        </S.Wrapper>
    )
}

export default Signup;