import React, { useState } from "react";
import { Welcome } from "../../../assets";
import InputBox from "../input/index";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

interface SignupProps{
    id: string;
    email_ck: string;
    password: string;
    nickname: string;
}

const Signup = () => {

    const [data, setData] = useState<SignupProps>({
        id: "",
        email_ck: "",
        password: "",
        nickname: "",
    });

    const {id, email_ck, password, nickname} = data;

    const emailCode = (e: any) => {
        setData({
            ...data,
            email_ck: e.target.value
        });
    };

    const idChange = (e: any) => {
        setData({
            ...data,
            id: e.taget.value
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

    const signupBtn = () => {
        console.log("asd");
    }

    const onKeyGo = (e: any) => {
        if(e.key === "Enter"){
            signupBtn();
        }
    }


    const history = useHistory();

    return(
        <S.Wrapper onKeyPress={onKeyGo}>
            <S.Modal>
                <Welcome />
                <S.Wrap>
                    <S.Verify>
                        <InputBox 
                            onChange={idChange}
                            title="email"
                            placeholder="이메일을 입력해주세요"
                        />
                        <button className="send">인증코드 발송</button>
                    </S.Verify>
                    <InputBox 
                        onChange={emailCode}
                        title="email check"
                        placeholder="인증코드를 입력해주세요"
                    />
                    <InputBox 
                        onChange={nameChange}
                        title="nickname"
                        placeholder="닉네임을 입력해주세요"
                    />
                    <InputBox 
                        onChange={pwChange}
                        title="password"
                        placeholder="비밀번호를 입력해주세요"
                    />
                </S.Wrap>
                <S.Btn onClick={signupBtn}>Signup</S.Btn>
            </S.Modal>
        </S.Wrapper>
    )
}

export default Signup;