import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Close } from "../../../../assets";
import useModal from "../../../../utils/hooks/modal/useModal";
import swal from "sweetalert";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../../utils/api/axios";
import useTask from "../../../../utils/hooks/task/useTask";
import useMain from "../../../../utils/hooks/main/useMain";

interface ModalProps {
    content: string;
}

const EditModal = () => {

    const task = useTask();
    const main = useMain();
    const modal = useModal();

    const [data, setData] = useState<ModalProps>({
        content: "",
    })

    const {content} = data;
    
    const changeContent = (e: any) => {
        setData({
            ...data,
            content: e.target.value
        })
        console.log(data);
    }

    const submit = (e: any) => {
            if(e.key === 'Enter'){
                editTask();
            }
    }

    const changeState = () => {
        modal.setState.setEditModal(false);
    }

    const editTask = () => {
        requestWithAccessToken({
            method: "PUT",
            url: `/task/${task.state.taskId}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {
                "task": content
            }
        }).then((res) => {
            console.log(res);
            swal({
                title: "수정 완료!",
                icon: "success",
            }).then(() => {
                main.setState.setComponent(true);
                setData({
                    content: ""
                });
                modal.setState.setEditModal(false);
            })
        }).then((err) => {
            console.log(err)
        })
    }

    return(
        <>
            <S.Wrapper>
                <S.Top>
                    <span>todolist 수정</span>
                    <img src={Close} alt=""onClick={changeState}  />
                </S.Top>
                <S.InpWrapper>
                    <input type="text" value={data.content} onChange={changeContent} onKeyDown={submit} placeholder="할 일을 입력하세요." />
                    <button type="button" onClick={editTask}>수정</button>
                </S.InpWrapper>
            </S.Wrapper>
            <S.Close onClick={changeState} />
        </>
    )
}

export default EditModal;