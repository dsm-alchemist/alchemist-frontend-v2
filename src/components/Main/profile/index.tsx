import React, { useState } from "react";
import * as S from "./styles";
import { BaseProfile } from "../../../assets/index";

interface UserProps {
    name: string;
    todo: number;
    follower: number;
    following: number;
}

const Profile = ()=> {

    const [data, setData] = useState<UserProps>({
        name: "",
        todo: 0,
        follower: 0,
        following: 10,
    });

    const {name, todo, follower, following} = data;
    
    return(
        <S.Wrapper>
            <S.Left>
                <img className="profile" src={BaseProfile} alt="" />
                <span className="name">{name}</span>
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