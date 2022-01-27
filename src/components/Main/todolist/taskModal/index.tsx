import React, { useEffect } from "react";
import * as S from "./styles";
import { ChangeDate, Delete, Edit, Push } from "../../../../assets";
import useModal from "../../../../utils/hooks/modal/useModal";
import useTask from "../../../../utils/hooks/task/useTask";
import { requestWithAccessToken, ACCESS_TOKEN } from "../../../../utils/api/axios";
import swal from "sweetalert";
import useMain from "../../../../utils/hooks/main/useMain";
import useDate from "../../../../utils/hooks/date/useDate";

const TaskModal = () => {

    const modal = useModal();
    const main = useMain();
    const task = useTask();

    useEffect(() => {
        main.setState.setTaskComponent(true);
    }, [])

    const changeTaskState = () => {
        modal.setState.setTaskModal(false);
    }

    const editModal = () => {
        modal.setState.setTaskModal(false);
        modal.setState.setEditModal(true);
    }

    const pushModal = () => {
        modal.setState.setTaskModal(false);
        modal.setState.setPushModal(true);
    }

    const tdYear =  new Date().getFullYear().toString();
    const tdMonth = (new Date().getMonth() + 1).toString().length === 1 ? "0" + (new Date().getMonth() + 1).toString() : (new Date().getMonth() + 1).toString();
    const tdDay = new Date().getDate().toString();
    const today = tdYear + tdMonth + tdDay;

    const setTaskToday = () => {
        requestWithAccessToken({
            method: "POST",
            url: `/task/storage/${task.state.taskId}?date=${today}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {},
        }).then((res) => {
            swal({
                title: "보관함에서 오늘 할 일로 이동하였습니다.",
                icon: "success"
            }).then(() => {
                modal.setState.setTaskModal(false);
                main.setState.setComponent(true);
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    const storageDelete = () => {
        requestWithAccessToken({
            method: "DELETE",
            url: `/task/storage/${task.state.taskId}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            swal({
                title: "삭제 성공!",
                icon: "success",
            }).then(() => {
                modal.setState.setTaskModal(false);
                main.setState.setComponent(true)
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    return(
        <>
            <S.Back>
                <S.Wrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={editModal}>
                        <img src={Edit} alt="" />
                    </S.ImgWrp>
                    <p>수정</p>
                </S.BtnWrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={setTaskToday}>
                        <img style={{transform: "rotate(180deg)"}} src={Push} alt="" />
                    </S.ImgWrp>
                    <p>오늘하기</p>
                </S.BtnWrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={pushModal}>
                        <img src={ChangeDate} alt="" />
                    </S.ImgWrp>
                    <p>날짜 바꾸기</p>
                </S.BtnWrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={storageDelete}>
                        <img src={Delete} alt="" />
                    </S.ImgWrp>
                    <p>삭제</p>
                </S.BtnWrapper>
                </S.Wrapper>
            </S.Back>
            <S.Close onClick={changeTaskState}></S.Close>
        </>
    )
}

export default TaskModal;