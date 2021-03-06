import React, { useEffect } from "react";
import * as S from "./styles";
import { ChangeDate, Delete, Edit, Push, Storage } from "../../../../assets";
import useModal from "../../../../utils/hooks/modal/useModal";
import useTask from "../../../../utils/hooks/task/useTask";
import { requestWithAccessToken, ACCESS_TOKEN } from "../../../../utils/api/axios";
import swal from "sweetalert2";
import useMain from "../../../../utils/hooks/main/useMain";
import useDate from "../../../../utils/hooks/date/useDate";

const MoreModal = () => {

    const modal = useModal();
    const task = useTask();
    const main = useMain();
    const date = useDate();

    const changeMoreState = () => {
        modal.setState.setMoreModal(false);
    }

    const editModal = () => {
        modal.setState.setMoreModal(false);
        modal.setState.setEditModal(true);
    }

    const pushModal = () => {
        modal.setState.setMoreModal(false);
        modal.setState.setPushModal(true);
    }

    const setTommorrow = () => {
        requestWithAccessToken({
            method: "POST",
            url: `/task/${task.state.taskId}?date=${date.state.tmDay}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {},
        }).then((res) => {
            console.log(res);
            swal.fire({
                title: "오늘 할 일을 미뤘습니다.",
                icon: "success"
            }).then(() => {
                modal.setState.setMoreModal(false);
                main.setState.setComponent(true);
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    const setStorageTask = () => {
        requestWithAccessToken({
            method: "POST",
            url: `/task/${task.state.taskId}/storage`,
            headers: {authorization: ACCESS_TOKEN},
            data:{}
        }).then((res) => {
            console.log(res)
            swal.fire({
                title: "보관함 이동 성공",
                icon: "success",
            }).then(() => {
                modal.setState.setMoreModal(false);
                main.setState.setComponent(true);
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    

    const deleteTask = () => {

        swal.fire({
            title: "삭제 하시겠습니까?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오",
            focusConfirm: false,
            focusCancel: true
        }).then((result) => {
            if(result.isConfirmed){
                requestWithAccessToken({
                    method: "DELETE",
                    url: `/task/${task.state.taskId}`,
                    headers: {authorization: ACCESS_TOKEN},
                    data: {}
                }).then((res) => {
                    console.log(res.data);
                    swal.fire({
                        title: "삭제 성공!",
                        icon: "success",
                    }).then(() => {
                        main.setState.setComponent(true);
                        modal.setState.setMoreModal(false);
                        main.setState.setProfileComponent(true);
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }
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
                    <p style={{fontSize: "12px"}}>수정</p>
                </S.BtnWrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={setTommorrow}>
                        <img src={Push} alt="" />
                    </S.ImgWrp>
                    <p style={{fontSize: "12px"}}>내일하기</p>
                </S.BtnWrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={pushModal}>
                        <img src={ChangeDate} alt="" />
                    </S.ImgWrp>
                    <p style={{fontSize: "12px"}}>날짜 바꾸기</p>
                </S.BtnWrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={setStorageTask}>
                        <img src={Storage} alt="" />
                    </S.ImgWrp>
                    <p style={{fontSize: "12px"}}>보관함으로</p>
                </S.BtnWrapper>
                <S.BtnWrapper>
                    <S.ImgWrp onClick={deleteTask}>
                        <img src={Delete} alt="" />
                    </S.ImgWrp>
                    <p style={{fontSize: "12px"}}>삭제</p>
                </S.BtnWrapper>
                </S.Wrapper>
            </S.Back>
            <S.Close onClick={changeMoreState}></S.Close>
        </>
    )
}

export default MoreModal;