import styled from "styled-components";
import { WIDTH, COLOR } from "../../../styles/index";

export const Wrapper = styled.div`
    width: ${WIDTH.main};
    height: 840px;
    background: ${COLOR.whiteColor};
    box-shadow: 4px 7px 10px #727272;
    border-radius: 13px;
`

export const Top = styled.div`
    padding-top: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    & button{
        border: none;
        background: none;
        font-size: 30px;
    }

    & span{
        font-size: 30px;
    }

`

export const Table = styled.table`
    margin-top: 50px;
`

export const TBody = styled.tbody`
    & span{
        display: flex;
        justify-content: center;
        font-size: 32px;
        margin-bottom: 100px;
        margin-left: 180px;
    }
`



export const CalTr = styled.tr`
    & td:nth-of-type(1){
        color: #FF4545;
    }
    
    & td:nth-of-type(7){
        color: #1DA0FF;
    }
`

export const Today = styled.td`
   
`

export const NotCurMonth = styled.td`
     
`

export const CurMonth = styled.td`
    
`