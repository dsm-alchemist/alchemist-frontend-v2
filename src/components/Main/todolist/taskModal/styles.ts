import styled from "styled-components";
import { COLOR } from "../../../../styles";

export const Back = styled.div`
    position: absolute;
    z-index: 3;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
`

export const Wrapper = styled.div`
    background: ${COLOR.whiteColor};
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 10px;
`

export const Close = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 2;
    height: 100vh;
    background: rgba(209,209,209,0.7);
    cursor: pointer;
`


export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;

    & p{
        padding-top: 12px;
        font-size: 14px;
    }
`

export const ImgWrp = styled.div`
    cursor: pointer;
    background: #E5E5E5;
    border-radius: 50%;

    & img{
        width: 20px;
        height: 20px;
        padding: 10px;
    }
`

