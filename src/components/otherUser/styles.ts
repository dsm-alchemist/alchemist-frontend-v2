import styled from "styled-components";
import { COLOR } from "../../styles";
import { BackLeft } from "../../assets";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #F8FEFF;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Modal = styled.div`
    display: flex;
    width: 1300px;
    justify-content: space-between;
    margin-top: 70px;
`

export const LeftSide = styled.div`
    width: 580px;
    height: 770px;
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    box-shadow: 0px 0px 16px #868686;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Right = styled.div`
    width: 580px;
    height: 770px;
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    box-shadow: 0px 10px 10px #868686;
    background-image: url("${BackLeft}");
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Todo = styled.div`
    width: 450px;
    height: 480px;
    overflow-y: scroll;
    background: ${COLOR.whiteColor};
    box-shadow: 0px 0px 13px #868686;
    border-radius: 13px;
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

export const TodoWrapper = styled.div`
    display: flex;
    width: 450px;
    margin-top: 30px;
    padding: 10px 0px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

export const TodoWrp = styled.div`
    display: flex;
    width: 390px;
    margin-top: 40px;
    padding: 10px 0px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const LeftTop = styled.div`
    width: 450px;
    box-shadow: 4px 7px 10px #8c8c8c;
    border-radius: 13px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    & input{
        width: 70%;
        border: none;
        padding: 10px 0px;
        background: #dddddd;
        border-radius: 7px;
        margin: 10px 0px;
        text-indent: 10px;
    }

    & button {  
        font-size: 17px;
        border: none;
        background: #958cff;
        color: white;
        padding: 5px 15px;
        border-radius: 7px;
    }
`