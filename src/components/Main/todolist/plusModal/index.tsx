import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { Close } from "../../../../assets";
import useModal from "../../../../utils/hooks/modal/useModal";
import useTodo from "../../../../utils/hooks/todolist/useTodo";
import useDate from "../../../../utils/hooks/date/useDate";
import useMain from "../../../../utils/hooks/main/useMain";
import swal from "sweetalert";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../../utils/api/axios";
import useTask from "../../../../utils/hooks/task/useTask";

interface ModalProps {
    content: string;
}

const Modal = () => {

    const main = useMain();
    const date = useDate();
    const modal = useModal();
    const task = useTask();

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
                addTask();
            }
    }

    const changeState = () => {
        modal.setState.setTodoModal(false);
    }

    const addInput = useRef<any>();

    const addTask = () => {

        if(data.content.length === 0) {
            swal({
                title: "빈칸은 추가할 수 없습니다.",
                icon: "error",
                dangerMode: true
            })
            return false;
        }
        else{
            requestWithAccessToken({
                method: "POST",
                url: "/task",
                headers: {authorization: ACCESS_TOKEN},
                data: {
                    "task": content,
                    "date": date.state.tdDay,
                },
            }).then((res) => {
                console.log(res.data);
                swal({
                    title: "할 일을 추가했습니다.",
                    icon: "success",
                }).then(() => {
                    addInput.current.focus();
                })
                main.setState.setComponent(true);
                console.log(date.state.tdDay);
                setData({
                    content: "" 
                });
            }).catch((err) => {
                console.log(err);
                swal({
                    title: "할 일 추가를 실패하였습니다. ",
                    icon: "error",
                    dangerMode: true
                });
                setData({
                    content: "" 
                })
            })
        }
    }

    return(
        <>
            <S.Wrapper>
                <S.Top>
                    <span>todolist 추가</span>
                    <img src={Close} alt=""onClick={changeState}  />
                </S.Top>
                <S.InpWrapper>
                    <input ref={addInput} type="text" value={data.content} onChange={changeContent} onKeyDown={submit} placeholder="할 일을 입력하세요." />
                    <button type="button" onClick={addTask}>추가</button>
                </S.InpWrapper>
            </S.Wrapper>
            <S.Close onClick={changeState} />
        </>
    )
}

export default Modal;