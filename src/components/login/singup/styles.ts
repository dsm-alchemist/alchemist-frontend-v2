import styled from "styled-components";
import { signupBack } from "../../../assets";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${signupBack});
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
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -40px;
`

export const Modal = styled.div`

& .loginlogo {
    width: 700px;
    margin-top: 40px;
}
    border-radius: 15px;
    box-shadow: 0px 8px 16px #656565;
    background-color: ${COLOR.whiteColor};
    width: 1000px;
    height: 800px;
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
    margin-left: -40px;
`

export const Verify = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 129px;
    margin-bottom: 25px;


    & .send{
        background: ${COLOR.blackColor};
        padding: 20px 20px;
        border-radius: 7px;
        color: ${COLOR.whiteColor};
        font-size: 12px;
        margin-bottom: 5px;
        margin-left: 10px;
        position: relative;
    }
`


export const Container = styled.div`
    display: flex;
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
`