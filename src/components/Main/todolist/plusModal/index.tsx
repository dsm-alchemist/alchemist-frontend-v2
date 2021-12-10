import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Close } from "../../../../assets";
import useModal from "../../../../utils/hooks/modal/useModal";
import useTodo from "../../../../utils/hooks/todolist/useTodo";
import useDate from "../../../../utils/hooks/date/useDate";

interface ModalProps {
    content: string;
}

const Modal = () => {

    const todo = useTodo();

    const date = useDate();

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

    const addTodo = () => {
        if(data.content.length === 0) {
            alert("빈칸은 추가하실 수 없습니다.");
            return false;
        }

        todo.setState.submit({
            id: todo.state.todo.todoItems.length,
            text: data.content,
            date: date.state.tdDay.toString(),
            done: false
        });
        localStorage.setItem("todolist", todo.state.todo.todoItems.toString())
        setData({
            content: ""
        })
        alert("추가 되었습니다.");

    }

    const submit = (e: any) => {
            if(e.key === 'Enter'){
                addTodo();
            }
    }

    const modal = useModal();

    const changeState = () => {
        modal.setState.setTodoModal(false);
    }
      

    return(
        <>
            <S.Wrapper>
                <S.Top>
                    <span>todolist 추가</span>
                    <img src={Close} alt=""onClick={changeState}  />
                </S.Top>
                <S.InpWrapper>
                    <input type="text" value={data.content} onChange={changeContent} onKeyDown={submit} placeholder="할 일을 입력하세요." />
                    <button type="button" onClick={addTodo}>추가</button>
                </S.InpWrapper>
            </S.Wrapper>
            <S.Close onClick={changeState} />
        </>
    )
}

export default Modal;