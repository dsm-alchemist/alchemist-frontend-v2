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
    .modal{ 
        zoom: 1;
    }

    @media screen and (min-width: 1500px) {
        .modal{
            zoom: 1.3;
        }
    }
`

export const Modal = styled.div`
    display: flex;
    width: 1000px;
    justify-content: center;
    gap: 50px;
    margin-top:70px;
`

export const LeftSide = styled.div`
    width: 420px;
    height: 570px;
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    box-shadow: 0px 0px 16px #868686;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Right = styled.div`
    width: 420px;
    height: 570px;
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    box-shadow: 0 0 16px #868686;
    background-image: url("${BackLeft}");
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Todo = styled.div`
    width: 350px;
    height: 380px;
    overflow-y: scroll;
    background: ${COLOR.whiteColor};
    box-shadow: 0px 0px 13px #868686;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &{
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
    }
    &::-webkit-scrollbar{
        display: none; /* Chrome, Safari, Opera*/
    }

    
    & .title{
        padding-top: 10px;
        font-size: 17px;
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
    width: 350px;
    margin-top: 20px;
    padding: 10px 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 16px #c3c3c3;

    & .todoContent{
        font-size: 16px;
        padding-left: 15px;
    }

    & .check{
        width: 18px; 
        height: 18px;
        border: 1px solid #7F92FC;
        border-radius: 50%;
        margin-left: 35px;
        cursor: pointer;
    }

    & .imgWrp{
        width: 25px;
        margin-right: 33px;
        height: 25px;
        background: #E3E3E3;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        & .more{
            height: 2.5px;
            
        }
    }
`

export const TodoWrp = styled.div`
    display: flex;
    width: 310px;
    margin-top: 20px;
    padding: 10px 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow:  0px 0px 10px #c3c3c3;

    & .todoContent{
        font-size: 15px;
        padding-left: 12px;
    }

    & .check{
        width: 15px; 
        height: 15px;
        border: 1px solid #7F92FC;
        border-radius: 50%;
        margin-left: 35px;
        cursor: pointer;
    }

    & .imgWrp{
        width: 25px;
        margin-right: 33px;
        height: 25px;
        background: #E3E3E3;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        & .more{
            height: 3.5px;
            
        }
    }
`

export const Left = styled.div`
    display: flex;
    align-items: center;
`

export const LeftTop = styled.div`
    width: 370px;
    box-shadow: 0 0  9px #c3c3c3;
    border-radius: 13px;
    margin-top: 10px;
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
        font-size: 14px;
        border: none;
        background: #958cff;
        color: white;
        padding: 5px 15px;
        border-radius: 7px;
    }
`