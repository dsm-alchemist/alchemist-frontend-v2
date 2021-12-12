import styled from "styled-components";
import { COLOR } from "../../../styles/index";

export const Wrapper = styled.div`
    width: 500px;
    height: 200px;
    background: ${COLOR.whiteColor};
    box-shadow: 4px 7px 10px #8c8c8c;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    gap: 50px;
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
        font-size: 21px;
        padding-top: 20px;
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

    & .editProfile{
        width: 100%;
        border-radius: 3px;
        background: none;
        border: 1px solid #ACACAC;
    }
`