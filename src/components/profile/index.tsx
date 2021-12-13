import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BaseProfile } from "../../assets/index";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../utils/api/axios";
import useMain from "../../utils/hooks/main/useMain";

interface UserProps {
    follower: number;
    following: number;
    todo: number;
}

const Profile = ()=> {

    const main = useMain();

    const [data, setData] = useState<UserProps>({
        follower: 0,
        following: 0,
        todo: 0,
    });

    const { todo, follower, following} = data;

    const getUserInfo = () => {
        requestWithAccessToken({
            method: "GET",
            url: "/follow",
            headers: {authorization: ACCESS_TOKEN},
            data: {},
        }).then((res) => {
            console.log(res.data);
            setData({
                follower: res.data.follower,
                following: res.data.following,
                todo: res.data.taskCount,
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUserInfo();
    }, []);
    useEffect(() => {
        getUserInfo();
        main.setState.setProfileComponent(false);
    }, [main.state.profileRender])
    
    return(
        <S.Wrapper>
            <S.Left>
                <img className="profile" src={BaseProfile} alt="" />
            </S.Left>
            <S.Right>
                <S.Top>
                    <ul className="todo">
                        <li className="title">오늘 할 일</li>
                        {
                            todo === 0 ? 
                            <li className="cnt" style={{color: "#E0E0E0"}}>{todo}</li> :
                            <li className="cnt" style={{color: "#000000"}}>{todo}</li>
                        }
                    </ul>
                    <ul className="follower">
                        <li className="title">팔로워</li>
                        {
                            follower === 0 ? 
                            <li className="cnt" style={{color: "#E0E0E0"}}>{follower}</li> :
                            <li className="cnt" style={{color: "#000000"}}>{follower}</li>
                        }
                    </ul>
                    <ul className="following">
                        <li className="title">팔로잉</li>
                        {
                            following === 0 ? 
                            <li className="cnt" style={{color: "#E0E0E0"}}>{following}</li> :
                            <li className="cnt" style={{color: "#000000"}}>{following}</li>
                        }
                    </ul>
                </S.Top>
                <S.Bottom>
                    <button className="editProfile">프로필 편집</button>
                </S.Bottom>
            </S.Right>
        </S.Wrapper>
    )
}

export default Profile;