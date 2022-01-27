import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    width: 350px;
    height: 150px;
    border-radius: 7px;
    box-shadow: 0 0 16px #868686;
    background: ${COLOR.whiteColor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .profile {
        width: 50px;
        border-radius: 50%;
    }

    & .name {
        font-size: 14px;
        padding-top: 10px;
    }
    
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Top = styled.div`
    display: flex; 
    & ul:nth-of-type(1){
        margin-left: 0;
    }

    & ul{
        margin-left: 20px;
    }

    & .todo{
        text-align: center;
    }

    & .follower{
        text-align: center;
    }

    & .following{
        text-align: center; 
    }

    & .title{
        font-size: 14px;
        color: #B1B1B1;
    }

    & .cnt{
        font-size: 14px;
        margin-top: 5px;
    }
    
`

export const Bottom = styled.div`
    margin-top: 30px;

    & .follow{
        width: 100%;
        border-radius: 3px;
        background: none;
        color: #4c83ff;
        border: 1px solid #4c83ff;
    }
`