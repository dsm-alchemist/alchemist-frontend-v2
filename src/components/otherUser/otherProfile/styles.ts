import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    width: 450px;
    height: 200px;
    border-radius: 7px;
    box-shadow: 4px 7px 10px #8c8c8c;
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
        width: 72px;
        border-radius: 50%;
    }

    & .name {
        font-size: 18px;
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
        font-size: 18px;
        color: #B1B1B1;
    }

    & .cnt{
        font-size: 18px;
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