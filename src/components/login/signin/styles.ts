import styled from "styled-components";
import { signinBack } from "../../../assets";
import { COLOR } from "../../../styles";

export const Wrapper = styled.form`
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
        font-size: 15px;
        color: ${COLOR.blue200};

        & .goSpan{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const Wrap = styled.div`
    margin-top: 60px;
`

export const Modal = styled.div`
    border-radius: 15px;
    box-shadow: 0px 8px 16px #656565;
    background-color: ${COLOR.whiteColor};
    width: 1000px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Btn = styled.button`
    width: 550px;
    height: 55px;
    background: ${COLOR.blackColor};
    color: ${COLOR.whiteColor};
    border-radius: 7px;
    font-size: 25px;
    border: none;
    margin-top: 30px;
`

export const InputBox = styled.div`

    & p{
        font-size: 16px;
        padding-left: 10px;
    }

    & input{
        width: 550px;
        height: 65px;
        border-radius: 7px;
        background: #E8E8E8;
        border: none;
        font-size: 15px;
        text-indent: 15px;
        margin-top: 10px;
    }

    margin-bottom: 30px;
`