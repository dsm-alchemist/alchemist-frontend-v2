import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BaseProfile } from "../../../assets";
import { ACCESS_TOKEN, requestWithAccessToken, requestWithOutAccessToken } from "../../../utils/api/axios";
import useMain from "../../../utils/hooks/main/useMain";
import swal from "sweetalert2";
import { useHistory } from "react-router";

const UserBox = () => {

    const [list, setList] = useState<any[]>([]);

    const history = useHistory();

    const [bool, setBool] = useState({
        all: true,
        following: false,
        follower: false,
    });

    const main = useMain();

    const getAllUser = () => {
        requestWithAccessToken({
            method: "GET",
            url: "/explore",
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setList(res.data);
            setBool({
                all: true,
                follower: false,
                following: false
            });
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
            setList(res.data);
            setBool({
                all: false,
                follower: false,
                following: true
            });
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
            setList(res.data);
            setBool({
                all: false,
                follower: true,
                following: false
            });
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
            main.setState.setProfileComponent(true);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        main.setState.setProfileComponent(false);
        if(bool.all === true) {
            getAllUser();
        }
        else if(bool.following === true) {
            getFollowingUser();
        }
        else {
            getFollowerUser();
        }
    }, [main.state.profileRender]);

    const cancleFollow = (e: any) => {
        swal.fire({
            title: "팔로잉을 취소하시겠습니까?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
            focusConfirm: true,
            focusCancel: false
        }).then((result) => {
            if(result.isConfirmed){
                requestWithAccessToken({
                    method: "DELETE",
                    url: `/following/${e.userEmail}`,
                    headers: {authorization: ACCESS_TOKEN},
                    data: {}
                }).then((res) => {
                    console.log(res);
                    main.setState.setProfileComponent(true);
                }).catch((err) => {
                    console.log(err);
                })
            } else{
                return;
            }
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
                                <p className="name" onClick={() => {localStorage.setItem("otherName", e.userName); localStorage.setItem("otherEmail", e.userEmail); history.push("/other")}}>{e.userName}</p>
                                <p className="email">{e.userEmail}</p>
                            </S.LeftTop>    
                        </S.ListLeft>
                        <S.ListRight>
                            {
                                !e.isFollowing ? 
                                    <button className="follow" onClick={() => {setFollow(list[index]);}}>팔로우</button>
                                        : 
                                    <button style={{border: "1px solid #FF7879", color: "#FF7879"}} onClick={() => {cancleFollow(list[index])}}>팔로잉</button>
                            }
                        </S.ListRight>
                    </S.Wrapper>
                ))
            }
            </S.List>
        </S.UserList>
        
    )
}

export default UserBox;