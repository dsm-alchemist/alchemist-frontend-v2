import React, { useState } from 'react';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { Chart, Gold, Silver, Bronze } from '../../assets';
import * as S from "./styles"

interface RankingProps{
    name: string;
    time: string | number;
}

const Ranking = () => {

    const [data, setData] = useState<RankingProps>({
        name: "",
        time: ""
    });

    const {name, time} = data;

    return(
        <S.Wrapper>
            <S.TopRank>
                    <S.Top>
                        <img className="chart" src={Chart} alt="" />
                        <p className="myname"><span style={{color: "#6067FF", fontWeight: "bold"}}>{name}</span> 님의 랭킹은 3등 입니다.</p>
                    </S.Top>
                    <S.Main>
                        
                        <S.Silver>
                            <img src={Silver} alt="" />
                            <p className="name">{name}</p>
                            <p className="timer">{time}</p>
                        </S.Silver>
                        <S.Gold>
                            <img src={Gold}  alt="" />
                            <p className="name">{name}</p>
                            <p className="timer">{time}</p>
                        </S.Gold>
                        <S.Bronze>
                            <img src={Bronze} alt="" />
                            <p className="name">{name}</p>
                            <p className="timer">{time}</p>

                        </S.Bronze>
                    </S.Main>
                    <S.Bottom>
                        <S.More>
                            <p className="scroll">스크롤 해서 더보기</p>
                            <p className="arrow" >&gt;&gt;</p>
                        </S.More>
                    </S.Bottom>
            </S.TopRank>
            <S.RankList>
                {
                    [...Array(8)].map((index: number) => {
                        return(
                            <S.ListBox className="listBox">
                                <S.Left>
                                    <p className="number">{index}</p>
                                    <p className="listname">{name}</p>
                                </S.Left>
                                    <p className="time">{time}</p>
                            </S.ListBox>
                        )
                    })
                }
            </S.RankList>
        </S.Wrapper>
    )
}

export default Ranking;