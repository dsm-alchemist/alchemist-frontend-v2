import React, { useState } from "react";
import * as S from "./styles";
import Calendar from "./calendar/index";
import Profile from "./profile/index";
import Todolist from "./todolist/index";

const Main = () => {
    return(
        <S.Wrapper>
            <Calendar />
            <S.Left>
                <Todolist />
                {/* <Profile /> */}
            </S.Left>
        </S.Wrapper>
    )
}

export default Main;