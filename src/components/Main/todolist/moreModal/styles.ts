import styled from "styled-components";
import { COLOR } from "../../../../styles";

export const Back = styled.div`
    position: absolute;
    z-index: 1;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
`

export const Wrapper = styled.div`
    background: ${COLOR.whiteColor};
    width: 500px;
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
`

export const Close = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 0;
    height: 100vh;
    background: rgba(209,209,209,0.7);
    cursor: pointer;
`