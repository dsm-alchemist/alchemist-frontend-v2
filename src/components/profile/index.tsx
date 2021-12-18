import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BaseProfile } from "../../assets/index";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../utils/api/axios";
import useMain from "../../utils/hooks/main/useMain";
import { useHistory } from "react-router";
import swal from "sweetalert2";

interface UserProps {
    follower: number;
    following: number;
    todo: number;
}

const Profile = ()=> {

    const main = useMain();

    const history = useHistory();

    const [data, setData] = useState<UserProps>({
        follower: 0,
        following: 0,
        todo: 0,
    });

    const { todo, follower, following} = data;

    const getUserInfo = () => {
        requestWithAccessToken({
            method: "GET",
            url: `/follow/${localStorage.getItem("email")}`,
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

    const deleteAccount = () => {

        swal.fire({
            title: "정말로 계정을 삭제 하시겠습니까?",
            icon: "error",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
            focusConfirm: false,
            focusCancel: true
        }).then((result) => {
            if(result.isConfirmed){
                requestWithAccessToken({
                    method: "DELETE",
                    url: "/account",
                    headers: {authorization: ACCESS_TOKEN},
                    data: {}
                }).then((res) => {
                    console.log(res);
                    swal.fire({
                        title: "계정 삭제 완료!",
                        text: "회원가입 페이지로 이동합니다.",
                        icon: "success"
                    }).then(() => {
                        history.push("/signup");
                    })
                }).catch((err) => {
                    console.log(err);
                })
            }
            else{
                return;
            }
        })

        
    }

    useEffect(() => {
        getUserInfo();
        main.setState.setMypageComponent(false);
    }, []);
    useEffect(() => {
        getUserInfo();
        main.setState.setProfileComponent(false);
    }, [main.state.profileRender])
    
    return(
        <S.Wrapper>
            <S.Left>
                <img className="profile" src={BaseProfile} alt="" />
                <p className="name">{localStorage.getItem("name")}</p>
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
                    {
                        main.state.myPageRender ? 
                            <button onClick={deleteAccount} style={{border: "1px solid #ff6363", color: "#ff6363"}} className="editProfile">계정 삭제</button>
                                : 
                            <button onClick={() => history.push("/mypage")} className="editProfile">프로필 보기</button>
                    }
                </S.Bottom>
            </S.Right>
        </S.Wrapper>
    )
}

export default Profile;