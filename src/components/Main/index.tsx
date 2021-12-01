import React from "react";
import * as S from "./styles";
import Calendar from "./calendar/index";
import Profile from "./profile/index";

const Main = () => {
    return(
        <S.Wrapper>
            <Calendar />
            <S.Left>
                <Profile />
            </S.Left>
        </S.Wrapper>
    )
}

export default Main;