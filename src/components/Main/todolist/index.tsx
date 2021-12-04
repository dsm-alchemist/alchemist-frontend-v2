import React, { useEffect } from "react";
import useDate from "../../../utils/hooks/date/useDate";
import * as S from "./styles";
import { Plus } from "../../../assets/index";

const Todolist = () => {

    const {state} = useDate();

    return(
        <S.Wrapper>
            <S.Top>
                <span>{state.tdMonth}월 {state.tdDay}일</span>
                <img src={Plus} alt="" />
            </S.Top>
            
        </S.Wrapper>
    )
}

export default Todolist;