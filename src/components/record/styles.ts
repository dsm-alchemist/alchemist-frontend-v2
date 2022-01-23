import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    background: #F8FEFF;
    flex-direction: column;
    overflow-y: scroll;

    & .timer{
        font-size: 16px;
        padding: 10px 50px;
        font-weight: bold;
        border: none;
        border-radius: 7px;
        margin-top: 40px;
        color: #393939;
    }

    & .reset{
        margin-top: 20px;
        font-size: 16px;
        color: #ff5959;
    }
`

export const Time = styled.div`
    margin-top: 180px;
    display: flex;
    font-size: 30px;
    margin-bottom: 20px;
`