import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../utils/api/axios";
import RankingBox from "./rankingBox";

interface RankingProps{
    name: string;
    timer: string;
    isStop: boolean;
}

const Ranking = () => {

    const [data, setData] = useState<RankingProps[]>([]);
    const [page, setPage] = useState<number>(0);
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
        <Wrapper>
            <p className="title">랭킹</p>
            <RankingBox name={"윤석훈 "} isActive={true} time={"6"} ranking={1}  />
            <RankingBox name={"윤석훈 "} isActive={false} time={"5"} ranking={2}  />
            <RankingBox name={"윤석훈 "} isActive={true} time={"4"} ranking={3}  />
            <RankingBox name={"윤석훈 "} isActive={false} time={"3"} ranking={4}  />
            <RankingBox name={"윤석훈 "} isActive={false} time={"2"} ranking={5}  />
            <RankingBox name={"윤석훈 "} isActive={true} time={"1"} ranking={6}  />

            {
                data.map((e, index) => {
                    return(
                        <RankingBox name={e.name} isActive={e.isStop} time={e.timer} ranking={index + 1}  />
                    )
                })
            }
        </Wrapper>
    )  
}

const Wrapper = styled.div`
    margin-top: 30px;
    .title{
        font-size: 20px;
        font-weight: bold;
        margin-top: 30px;
    }
    & {
        zoom: 1;
    }
    @media screen and (min-width: 1500px){
        & {
            zoom: 1.15;
        }
    }
`


export default Ranking;