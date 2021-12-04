import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    width: 500px;
    height: 500px;
    background: ${COLOR.whiteColor};
    box-shadow: 4px 7px 10px #8c8c8c;
    border-radius: 13px;
`

export const Top = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span{
        font-size: 20px;
        padding-left: 20px;
    }

    & img{
        cursor: pointer;
        width: 20px;
        padding-right: 20px;
    }
`