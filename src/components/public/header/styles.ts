import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.header`
    width: 100%;
    height: 110px;  
    position: fixed;
    box-shadow: 0px 6px 7px #c2c2c2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${COLOR.whiteColor};
    z-index: 100;
`

export const Left = styled.div`
    padding-left: 20px;

    & .logo{
        width: 225px;
        cursor: pointer;
    }
    & .mobileLogo{
        /* display: none; */
    } 
`

export const Right = styled.div`
    display: flex;
    padding-right: 20px;
    align-items: center;  
    font-size: 26px;
    font-family: none;
    font-weight: 300; 
    & ul {
        display: flex;
        padding-right: 20px;
        & li{
            padding-right: 20px;
            cursor: pointer;
        }
    }
`