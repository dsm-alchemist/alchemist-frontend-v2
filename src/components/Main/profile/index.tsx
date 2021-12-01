import React from "react";
import * as S from "./styles";
import { BaseProfile } from "../../../assets/index";

const Profile = () => {
    return(
        <S.Wrapper>
            <S.Left>
                <img src={BaseProfile} alt="" />
                <span>윤석훈</span>
            </S.Left>
            <S.Right></S.Right>
        </S.Wrapper>
    )
}

export default Profile;