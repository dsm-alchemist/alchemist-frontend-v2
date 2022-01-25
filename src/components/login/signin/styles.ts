import styled from "styled-components";
import { signinBack } from "../../../assets";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${signinBack});
    display: flex;
    justify-content: center;
    align-items: center;
    

    & .welcome{
        padding-top: 50px;
    }

    & .goP{

        margin-top: 10px;
        font-size: 13px;
        color: ${COLOR.blue200};

        & .goSpan{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const Wrap = styled.div`
    margin-top: 30px;
`

export const Modal = styled.div`
    & .loginlogo {
        width: 500px;
        margin-top: 50px;
    }
    border-radius: 15px;
    box-shadow: 0px 8px 16px #656565;
    background-color: ${COLOR.whiteColor};
    width: 700px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Btn = styled.button`
    width: 450px;
    height: 35px;
    background: ${COLOR.blackColor};
    color: ${COLOR.whiteColor};
    border-radius: 7px;
    font-size: 18px;
    border: none;
    margin-top: 10px;
`

export const InputBox = styled.div`

    & p{
        font-size: 14px;
        padding-left: 10px;
    }

    & input{
        width: 450px;
        height: 50px;
        border-radius: 7px;
        background: #E8E8E8;
        border: none;
        font-size: 12px;
        text-indent: 15px;
        margin-top: 10px;
    }

    margin-bottom: 30px;
`