import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;
    margin-top: 20px;
`

export const ListLeft = styled.div`
    display: flex;
    align-items: center;
    & img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }

`

export const LeftTop = styled.div`
    padding-left: 10px;
    & .name{
        font-size: 13px;
    }

    & .name:hover{
        font-size: 13px;
        text-decoration: underline;
        cursor: pointer;
    }

    & .email{
        font-size: 10px;
        color: #8f8f8f; 
    }
`

export const ListRight = styled.div`
    & button {
        border: 1px solid #4c83ff;
        background: none;
        font-size: 12px;
        padding: 4px 10px;
        color: #4c83ff;
        border-radius: 5px;
    }
`


export const UserList = styled.div`
    width: 400px;
    height: 600px;
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    box-shadow:  0px 0px 16px #868686;

    & .navBar{
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 20px;
        & li{
            font-size: 13px;
            font-weight: bold;
            cursor: pointer;
        }

        & li:nth-of-type(2){
            margin: 0px 110px;
            
        }
    }

`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    height: 710px;
    overflow-y: scroll;
`