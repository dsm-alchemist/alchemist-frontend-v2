import styled from "styled-components";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Btn = styled.button`
    border: 1px solid #B1B1B1;
    padding: 10px;
    border-radius: 50%;
    color: ${COLOR.blackColor};
    background: "#E5E5E5";
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.p`
    margin-top: 5px;
    color: ${COLOR.blackColor};
`