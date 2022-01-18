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
        font-size: 25px;
        font-weight: bold;
        margin-top: 30px;
    }
`


export default Ranking;