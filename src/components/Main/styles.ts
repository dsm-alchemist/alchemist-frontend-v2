import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F8FEFF;
    display: flex;  
    align-items: center;
    justify-content: center;
    gap: 60px;
     .right{
        margin-top: 50px;
        zoom: 1;
    }
    .left{ 
        zoom: 1;
    }
    @media screen and (min-width: 1500px) {
        .right{
            zoom: 1.3;
        }
        .left{
            zoom: 1.3;
        }
    }
`

export const Left = styled.div`
    margin-top: 50px;

`