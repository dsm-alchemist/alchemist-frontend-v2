import React, { useState } from "react";
import * as S from "./styles";
import { Welcome } from "../../../assets";
import InputBox from "../input/index";
import { useHistory } from "react-router-dom";

interface SigninProps{
    id: string;
    password: string;
}

const Signin = () => {

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

    const signinBtn = () => {
        console.log("asd");
    }

    const onKeyGo = (e: any) => {
        if(e.key === "Enter"){
            signinBtn();
        }
    }
     

    const history = useHistory();
    
    return(
        <S.Wrapper onKeyPress={onKeyGo}>
            <S.Modal>
                <Welcome />
                <S.Wrap>
                    <InputBox 
                        onChange={idChange}
                        title="email"
                        placeholder="이메일을 입력해주세요"
                    />
                    <InputBox 
                        onChange={pwChange}
                        title="password"
                        placeholder="비밀번호를 입력해주세요"
                    />
                </S.Wrap>
                <S.Btn onClick={signinBtn}>Login</S.Btn>
                <p className="goP">if you don't have account <span onClick={() => history.push("/")} className="goSpan">Click here</span></p>
            </S.Modal>
        </S.Wrapper>
    )
}

export default Signin;