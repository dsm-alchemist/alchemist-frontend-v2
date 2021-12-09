import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    margin-top: 50px;
    width: 500px;
    height: 450px;
    background: ${COLOR.whiteColor};
    box-shadow: 4px 7px 10px #8c8c8c;
    border-radius: 13px;
    overflow-y: scroll;
`

export const Top = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span{
        font-size: 20px;
        padding-left: 30px;
    }

    & img{
        cursor: pointer;
        width: 20px;
        padding-right: 30px;
    }
`

export const Main = styled.div`

`

export const Left = styled.div`
    display: flex;
    align-items: center;
`


export const TodoWrp = styled.div`
    padding-top: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .check{
        width: 25px; 
        height: 25px;
        border: 1px solid #707070;
        border-radius: 50%;
        margin-left: 35px;
        cursor: pointer;
    }

    & .todoContent{
        font-size: 20px;
        padding-left: 10px;
    }

    & .imgWrp{
        width: 32px;
        margin-right: 50px;
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

