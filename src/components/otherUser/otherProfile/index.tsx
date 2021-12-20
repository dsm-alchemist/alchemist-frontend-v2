import React, { useEffect, useState } from "react";
import { BaseProfile } from "../../../assets";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../utils/api/axios";
import useMain from "../../../utils/hooks/main/useMain";
import * as S from "./styles";
import swal from "sweetalert2";

interface OtherProps {
    follower: number;
    following: number;
    todo: number;
}

const OtherProfile = () => {

    const [data, setData] = useState<OtherProps>({
        todo: 0,
        following: 0,
        follower: 0
    });
    const [fol, setFol] = useState<boolean>(false);

    const main = useMain();

    const {todo, follower, following} = data;

    const setFollow = () => {
        requestWithAccessToken({
            method: "POST",
            url: `/following/${localStorage.getItem("otherEmail")}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res);
            main.setState.setProfileComponent(true);
            setFol(true);
        }).catch((err) => {
            console.log(err);
        })
    };

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
                    url: `/following/${localStorage.getItem("otherEmail")}`,
                    headers: {authorization: ACCESS_TOKEN},
                    data: {}
                }).then((res) => {
                    console.log(res);
                    setFol(false);
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
        <S.Wrapper>
            <S.Left>
                <img className="profile" src={BaseProfile} alt="" />
                <p className="name">{localStorage.getItem("otherName")}</p>
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
                    {/* <S.Bottom>
                        {
                            fol ? 
                            <button className="follow" onClick={cancleFollow} style={{border: "1px solid #FF7879", color: "#FF7879"}}>following</button>
                            :
                            <button className="follow" onClick={setFollow}>follow</button>
                        }
                    </S.Bottom> */}
            </S.Right>
        </S.Wrapper>
    )
}

export default OtherProfile;