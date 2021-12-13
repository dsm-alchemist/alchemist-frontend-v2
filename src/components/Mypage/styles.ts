import styled from "styled-components";
import { BackRight } from "../../assets";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F8FEFF;
`

export const Modal = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`

export const Profile = styled.div`
    width: 580px;
    height: 770px;
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    box-shadow: 0px 10px 10px #868686;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-image: url("${BackRight}");
`

export const Todo = styled.div`
    width: 500px;
    height: 480px;
    overflow-y: scroll;
    background: ${COLOR.whiteColor};
    box-shadow: inset 0px 0px 13px #868686;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & .title{
        padding-top: 10px;
        font-size: 20px;
        font-weight: bold;
    }

    & .todoWrp:nth-of-type(1) {
        margin-top: 30px;
    }

    & .todoWrp:nth-last-of-type(1) {
        margin-bottom: 30px;
    }
`

export const TodoWrp = styled.div`
    display: flex;
    margin-top: 40px;
    padding: 10px 0px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 420px;
    box-shadow: inset 0px 0px 10px #B7CDFF;

    & .todoContent{
        font-size: 20px;
        padding-left: 30px;
    }

    & .check{
        width: 25px; 
        height: 25px;
        border: 1px solid #7F92FC;
        border-radius: 50%;
        margin-left: 35px;
        cursor: pointer;
    }

    & .imgWrp{
        width: 32px;
        margin-right: 33px;
        height: 32px;
        background: #E3E3E3;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        & .more{
            height: 4.5px;
            
        }
    }
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`