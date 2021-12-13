import React, { useEffect, useState } from 'react';
import { Chart, Gold, Silver, Bronze } from '../../assets';
import { ACCESS_TOKEN, requestWithAccessToken } from '../../utils/api/axios';
import * as S from "./styles"

interface RankingProps{
    name: string;
    time: string;
    isStop: boolean;
}

const Ranking = () => {

    const [data, setData] = useState<RankingProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [name, setName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getUserName = () => {
        requestWithAccessToken({
            method: "GET",
            url: "/account",
            headers: {authorization: ACCESS_TOKEN},
            data: {},
        }).then((res) => {
            console.log(res.data);
            setName(res.data.userName);
        }).catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        getUserName();
    })

    const getRank = () => {
        requestWithAccessToken({
            method: "GET",
            url: `/rank?page=${page}&size=${10}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);   
            setData(data.concat(res.data.rank));
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    useEffect(() => {
        setIsLoading(true);
        getRank();
    }, [page]);

    const scrollEvent = () => {
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        const clientHeight = document.documentElement.clientHeight;

        if(Math.round(scrollTop) + clientHeight === scrollHeight) {
            setPage(page + 1);
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            scrollEvent();
        }
    }, [])

    

    return(
        <S.Wrapper>
                    <>
                    <S.TopRank>
                                <S.Top>
                                    <img className="chart" src={Chart} alt="" />
                                    <p className="myname"><span style={{ color: "#6067FF", fontWeight: "bold" }}></span> 님의 랭킹은 3등 입니다.</p>
                                </S.Top>
                                <S.Main>
                                    <S.Silver>
                                        <img src={Silver} alt="" />
                                        <p className="name">{data[0]?.name}</p>
                                        <p className="timer">{"<><>"}</p>
                                    </S.Silver>
                                    <S.Gold>
                                        <img src={Gold} alt="" />
                                        <p className="name">{data[1]?.name}</p>
                                        <p className="timer">{"<><>"}</p>
                                    </S.Gold>
                                    <S.Bronze>
                                        <img src={Bronze} alt="" />
                                        <p className="name">{data[2]?.name}</p>
                                        <p className="timer">{"<><>"}</p>

                                    </S.Bronze>
                                </S.Main>
                                <S.Bottom>
                                    <S.More>
                                        <p className="scroll">스크롤 해서 더보기</p>
                                        <p className="arrow">&gt;&gt;</p>
                                    </S.More>
                                </S.Bottom>
                            </S.TopRank>
                            <S.RankList>
                                    {
                                        data.slice(0,2).map((e, index) => (
                                            <S.ListBox className="listBox">
                                                <S.Left>
                                                    <p className="number">{index}</p>
                                                    <p className="listname">{e?.name}</p>
                                                </S.Left>
                                                    <p className="time">{"<><>"}</p>
                                            </S.ListBox>
                                        ))
                                    }
                            </S.RankList>
                        </>
        </S.Wrapper>
    )
}

export default Ranking;