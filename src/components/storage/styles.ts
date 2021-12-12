import styled from "styled-components";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F8FEFF;
`

export const Modal = styled.div`
    overflow-y : scroll;
    width: 1200px;
    height: 750px;
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 7px 10px #727272;
    margin-top: 60px;
`

export const Top = styled.div`
    & p{
        font-size: 30px;
        font-weight: bold;
        padding: 40px;
    }
`

export const Main = styled.div`
    display: grid;
    grid: '. .';
    width: 100%;
    justify-content: space-evenly;
`

export const TodoWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
`

export const TodoWrp = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    padding: 10px 0px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    box-shadow: inset 0px 0px 10px #B7CDFF;

    & .todoContent{
        font-size: 20px;
        padding-left: 30px;
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

`