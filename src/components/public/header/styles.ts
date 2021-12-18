import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.header`
    width: 100%;
    height: 110px;  
    position: fixed;
    box-shadow: 0px 6px 12px #5e5e5e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${COLOR.whiteColor};
`

export const Left = styled.div`
    padding-left: 20px;

    & img{
        width: 300px;
    }
`

export const Right = styled.div`
    display: flex;
    padding-right: 20px;
    align-items: center;  
    font-size: 26px;
    font-family: none;
    font-weight: lighter;  
    & ul {
        display: flex;
        padding-right: 20px;
        & li{
            padding-right: 20px;
            cursor: pointer;
            text-decoration: underline;
        }
    }
`