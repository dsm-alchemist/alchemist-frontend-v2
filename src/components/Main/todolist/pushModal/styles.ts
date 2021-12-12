import styled from "styled-components";
import { COLOR } from "../../../../styles";

export const Wrapper = styled.div`
    position: absolute;
    z-index: 3;
    background: none;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
`

export const Top = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span{
        padding-bottom: 20px;
        font-size: 20px;
        margin-left: 10px;
    }
    & img{
        width: 18px;
        height: 18px;
        cursor: pointer;
        margin-right: -20px;
        margin-bottom: 10px;
    }
`

export const InpWrapper = styled.div`
    width: 630px;
    border-radius: 7px;
    background: ${COLOR.whiteColor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    & input{
        padding-right: 20px;
        width: 490px;
        height: 55px;
        border: none;
        background: #E5E5E5;
        border-radius: 7px;
        margin: 15px 0;
        font-size: 18px;
        text-indent: 15px;
    }

    & button{
        width: 70px;
        height: 40px;
        background: #797979;
        border: none;
        border-radius: 7px;
        color: ${COLOR.whiteColor};
    }
`

export const Close = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 2;
    height: 100vh;
    background: rgba(209,209,209,0.7);
    cursor: pointer;
`