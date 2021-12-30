import React, { useEffect, useState } from 'react';
import { Chart, Gold, Silver, Bronze } from '../../assets';
import { ACCESS_TOKEN, requestWithAccessToken } from '../../utils/api/axios';
import * as S from "./styles"

interface RankingProps{
    name: string;
    timer: string;
    isStop: boolean;
}

const Ranking = () => {

    const [data, setData] = useState<RankingProps[]>([]);
    const [page, setPage] = useState<number>(0);
    const [nickname, setName] = useState<string>("");
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
    },[])

    const getRank = () => {
        requestWithAccessToken({
            method: "GET",
            url: `/rank?page=${page}&size=${10}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);   
            setData(data.concat(res.data.content));
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

        if(Math.round(scrollTop) + clientHeight == scrollHeight) {
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
                        </S.Top>
                        <S.Main>
                            <S.Silver>
                                <img src={Silver} alt="" />
                                <p className="name">{data[1]?.name}</p>
                                <p className="timer">
                                    {
                                        data[1]?.timer == null ? 
                                        null : <p>{data[1]?.timer}시간</p> 
                                    }
                                </p>
                            </S.Silver>
                            <S.Gold>
                                <img src={Gold} alt="" />
                                <p className="name">{data[0]?.name}</p>
                                <p className="timer">
                                    {
                                        data[0]?.timer == null ? 
                                        null : <p>{data[0]?.timer}시간</p> 
                                    }
                                </p>
                            </S.Gold>
                            <S.Bronze>
                                <img src={Bronze} alt="" />
                                <p className="name">{data[2]?.name}</p>
                                <p className="timer">
                                    {
                                        data[2]?.timer == null ? 
                                        null : <p>{data[2]?.timer}시간</p> 
                                    }
                                </p>

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
                                data.map((e, index) => (
                                    <S.ListBox className="listBox">
                                        <S.Left>
                                            <p className="number">{index + 1}.</p>
                                            <p className="listname">{e?.name}</p>
                                        </S.Left>
                                            <p className="time">{e?.timer}시간</p>
                                    </S.ListBox>
                                ))
                            }
                    </S.RankList>
                </>
        </S.Wrapper>
    )
}

export default Ranking;