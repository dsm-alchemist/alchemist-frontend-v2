import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Calendar from "./calendar/index";
import Profile from "./profile/index";
import Todolist from "./todolist/index";
import Modal from "./todolist/plusModal";
import useModal from "../../utils/hooks/modal/useModal";
import MoreModal from "./todolist/moreModal";

const Main = () => {

    const modal = useModal();

    return(
        <>
        {
            !modal.state.todoModalState ? 
                null : <Modal />
        }
        {
            !modal.state.moreModalState ? 
                null : <MoreModal />
        }
        <S.Wrapper>
            <Calendar />
            <S.Left>
                <Profile />
                <Todolist />
            </S.Left>
        </S.Wrapper>
        </>
    )
}

export default Main;