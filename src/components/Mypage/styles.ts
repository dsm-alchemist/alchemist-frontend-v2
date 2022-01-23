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
    overflow-y: hidden;
`

export const Modal = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`

export const Profile = styled.div`
    width: 400px;
    height: 600px;
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
    width: 350px;
    height: 350px;
    background: ${COLOR.whiteColor};
    box-shadow: 0px 0px 13px #868686;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .wrap{
        height: 325px;
        overflow-y: scroll;
        padding: 0px 10px;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
    }

    .wrap::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

    & .title{
        padding-top: 10px;
        font-size: 14px;
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
    width: 280px;
    margin-top: 40px;
    padding: 10px 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    

    & .todoContent{
        font-size: 13px;
        padding-left: 15px;
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
        width: 20px;
        margin-right: 20px;
        height: 20px;
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

export const Left = styled.div`
    display: flex;
    align-items: center;
`