import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;

    & p{
        padding-top: 12px;
    }
`

export const ImgWrp = styled.div`
    cursor: pointer;
    background: #E5E5E5;
    border-radius: 50%;

    & img{
        width: 27px;
        height: 27px;
        padding: 10px;
    }
`