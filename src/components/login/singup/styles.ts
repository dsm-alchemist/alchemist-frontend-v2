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
    .modal{
        zoom: 1;
    }

    @media screen and (min-width: 1500px){
        .modal{
            zoom: 1.2;
        }
    }

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
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Modal = styled.div`

& .loginlogo {
    width: 500px;
    margin-top: 20px;
}
    border-radius: 15px;
    box-shadow: 0px 8px 16px #656565;
    background-color: ${COLOR.whiteColor};
    width: 750px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Btn = styled.button`
    width: 420px;
    height: 35px;
    background: ${COLOR.blackColor};
    color: ${COLOR.whiteColor};
    border-radius: 7px;
    font-size: 20px;
    border: none;
    margin-top: 30px;
`

export const Verify = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;


    & .send{
        background: ${COLOR.blackColor};
        padding: 10px 10px;
        z-index: 10;
        border-radius: 7px;
        color: ${COLOR.whiteColor};
        font-size: 8px;
        margin-bottom: 8px;
        margin-left: 350px;
        position: absolute;
    }
`


export const Container = styled.div`
    display: flex;
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
`