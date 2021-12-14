import styled from "styled-components";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
    width: 100%;
    background: #F8FEFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

export const TopRank = styled.div`
    width: 1500px;
    margin-top: 170px;
`

export const Top = styled.div`
    display: flex;
    align-items: flex-end;

    & .myname{
        margin-left: 10px;
        padding-left: 5px;
        padding-bottom: 10px;
        font-size: 16px;
        padding-right: 50px;
        border-bottom: 1px solid #707070;
    }
`

export const Main = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const Gold = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & .name{
        font-size: 30px;
        color: #03C5FF;
        font-weight: bold;
    }

    & .timer {
        font-size: 25px;
        font-weight: bold;
        margin-top: 10px;   
    }
`

export const Silver = styled.div`
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .name{
        font-size: 25px;
        color: #03C5FF;
        font-weight: bold;
    }
    & .timer {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;   
    }
`

export const Bronze = styled.div`
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .name{
        font-size: 25px;
        color: #03C5FF;
        font-weight: bold;
    }
    & .timer {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;   
    }
`

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

export const More = styled.div`

    & .scroll{
        font-size: 23px;
        padding-bottom: 50px;
        color:#A0A0A0;
    }

    & .arrow{
        font-size: 80px;
        color: #A0A0A0;
        font-family: auto;
        letter-spacing: -15px;
        transform: rotate(90deg);
        cursor: pointer;
    }
`

export const RankList = styled.div`
    width: 1200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${COLOR.whiteColor};
    box-shadow: 0px 6px 10px #898989;
    border-radius: 13px;
    margin-bottom: 50px;

    & .listBox:nth-of-type(1){
        margin-top: 30px;
    }

    & .listBox:nth-last-of-type(1){
        margin-bottom: 30px;
    }
`

export const ListBox = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    box-shadow: inset 0px 5px 10px #898989;
    box-shadow: 0px 3px 10px #898989;
    border-radius: 7px;
    margin-top: 30px;

    & .time{
        font-size: 22px;
        color:#FF395F;
        padding: 20px 0px;
        padding-right: 15px;
    }
`

export const Left = styled.div`
    display: flex;
    align-items: center;
    padding:10px 0px;

    & .number {
        font-size: 30px;
        padding-left: 15px;
    }

    & .listname {
        font-size: 22px;
        padding-left: 5px;
    }
`