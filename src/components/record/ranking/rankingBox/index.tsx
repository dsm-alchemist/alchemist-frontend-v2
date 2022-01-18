import React from "react";
import styled from "styled-components";

interface RankingProps{ 
    name: string;
    isActive: boolean;
    time: string;
    ranking: number | string;
}

const RankingBox = ({
    name,
    isActive,
    time,
    ranking
}: RankingProps) => {
    return(
        <Wrapper>
            <Top> <p className="highlight">{name}</p>님 <p className="isActive" style={{display: !isActive ? "none" : "flex"}} >공부중</p></Top>
            <Bottom>
                <p className="time">{time}시간</p>
                <p className="ranking" style={{color: ranking == 1 || 2 || 3 ? "blue" : "black"}}>{ranking}위</p>
            </Bottom>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: white;
    margin-top: 30px;
    width: 700px;
    height: 110px;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Top = styled.div`
    display: flex;
    .highlight{
        font-weight: bold;
    }
    font-size: 25px;
    margin-left: 20px;
    .isActive{
            color: #78ff39;
            margin-left: 10px;
            font-size: 16px;
        }
`

const Bottom = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .time{
        margin-left: 20px;
        font-size: 20px;
        color: #6D6D6D;
    }

    .ranking {
        font-size: 25px;
        margin-right: 20px;
        margin-top: -15px;
        color: red;
    }
`

export default RankingBox;