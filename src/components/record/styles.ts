import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding-top: 70px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F8FEFF;
    flex-direction: column;

    & .timer{
        font-size: 20px;
        padding: 10px 50px;
        font-weight: bold;
        border: none;
        border-radius: 7px;
        margin-top: 40px;
        color: #393939;
    }

    & .reset{
        border: none; 
        color: #1DA0FF;
        font-size: 20px;
        background: none;
        margin-top: 20px;
    }()
`

export const Time = styled.div`
    display: flex;
    font-size: 40px;
    margin-bottom: 20px;
`