import styled from "styled-components";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
    width: 350px;
    height: 150px;
    background: ${COLOR.whiteColor};
    box-shadow: 4px 7px 7px #c2c2c2;
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
        width: 50px;
        border-radius: 50%;
    }

    & .name {
        font-size: 13px;
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
        font-size: 13px;
        color: #B1B1B1;
    }

    & .cnt{
        font-size: 13px;
        margin-top: 5px;
    }
    
`

export const Bottom = styled.div`
    margin-top: 20px;

    & .editProfile{
        width: 100%;
        border-radius: 3px;
        font-size: 10px;
        background: none;
        border: 1px solid #ACACAC;
    }
`