import styled from "styled-components";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    background: #F8FEFF;
    .modal{
        zoom: 1;
    }
    @media screen and (min-width: 1500px){
        .modal {
            zoom: 1.3;
        }
    }
`

export const Modal = styled.div`
    background: ${COLOR.whiteColor};
    border-radius: 13px;
    margin-top: 60px;
    background: none;

    .todoWrap{
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
    }
    .todoWrap::-webkit-scrollbar{
        display: none; /* Chrome, Safari, Opera*/
    }
`

export const Top = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    & p{
        font-size: 20px;
        font-weight: bold;
        padding: 40px;
        margin-top: 60px;
    }
    & button{
        height: 30px;
        margin-top: 95px;
        background: none;
        border: 2px solid #b9b9b9;
        color: #5e5e5e;
        border-radius: 5px;
    }
    & button:hover{
        border: 2px solid black;
        color: black;
    }
`

export const Main = styled.div`
    width: 550px;
    height: 100px;
    justify-content: space-evenly;
    margin-top: -20px;
`

export const TodoWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 10px;
    padding: 10px 10px;
    height: 500px;
    justify-content: center;
    margin-bottom: 50px;
    overflow-y : scroll;
`

export const TodoWrp = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    padding: 10px 0px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 550px;
    height: 55px;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.16);
    background: #fff;

    & .todoContent{
        font-size: 16px;
        padding-left: 30px;
    }

    & .imgWrp{
        width: 20px;
        margin-right: 33px;
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

`