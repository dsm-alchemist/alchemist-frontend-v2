import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BaseProfile } from "../../../assets";
import { ACCESS_TOKEN, requestWithAccessToken, requestWithOutAccessToken } from "../../../utils/api/axios";

const UserBox = () => {

    const [list, setList] = useState<any[]>([]);

    const getAllUser = () => {
        requestWithAccessToken({
            method: "GET",
            url: "/explore",
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setList(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const getFollowingUser = () => {
        requestWithAccessToken({
            method: "GET",
            url: "/following",
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const getFollowerUser = () => {
        requestWithAccessToken({
            method: "GET",
            url: "/followers",
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setList(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getAllUser();
    }, []);


    const setFollow = (e: any) => {
        requestWithAccessToken({
            method: "POST",
            url: `/following/${e.userEmail}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    const cancleFollow = (e: any) => {
        requestWithAccessToken({
            method: "DELETE",
            url: `/following/${e.userEmail}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    

    return(
        <S.UserList>
            <ul className="navBar">
                <li onClick={getAllUser}>유저 전체</li>  
                <li onClick={getFollowingUser}>팔로잉</li>
                <li onClick={getFollowerUser}>팔로워</li>
            </ul>
            <S.List>
            {
                list.map((e, index) => (
                    <S.Wrapper>
                        <S.ListLeft>
                            <img src={BaseProfile} alt="" />
                            <S.LeftTop>
                                <p className="name">{e.userName}</p>
                                <p className="email">{e.userEmail}</p>
                            </S.LeftTop>    
                        </S.ListLeft>
                        <S.ListRight>
                            <button className="follow" onClick={() => {setFollow(list[index]);}}>팔로우</button>
                            <button onClick={() => {cancleFollow(list[index])}}></button>
                        </S.ListRight>
                    </S.Wrapper>
                ))
            }
            </S.List>
        </S.UserList>
        
    )
}

export default UserBox;