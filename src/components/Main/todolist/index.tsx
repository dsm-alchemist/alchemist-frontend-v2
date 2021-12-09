import React, { useEffect, useState } from "react";
import useDate from "../../../utils/hooks/date/useDate";
import * as S from "./styles";
import { Plus } from "../../../assets/index";
import useModal from "../../../utils/hooks/modal/useModal";
import {More} from "../../../assets/index";
import useTodo from "../../../utils/hooks/todolist/useTodo";
import { isTemplateTail } from "typescript";


const Todolist = () => {

    const date = useDate();
    const modal = useModal();
    const todo = useTodo();

    const changeTodoState = () => {
        modal.setState.setTodoModal(true);
    }

    const finish = (id: number) => {
        todo.setState.done(id);
    }

    const unfinish = (id: number) => {
        todo.setState.unDone(id);
    }

    const changeMoreState = () => {
        modal.setState.setMoreModal(true);
    }

    return(
        <>
        <S.Wrapper>
            <S.Top>
                <span>{date.state.tdDay.toString().substr(0,2)}월 {date.state.tdDay.toString().substr(2, 4)}일</span>
                <img src={Plus} alt=""  onClick={changeTodoState} />
            </S.Top>
            <S.Main>
                {
                todo.state.todo.todoItems.length === 0 ? 
                    <div></div> 
                        :
                        todo.state.todo.todoItems.map((item) => (
                            <S.TodoWrp >
                                <S.Left>
                                    {
                                        item.done ? 
                                            <div onClick={() => unfinish(item.id)} style={{background: "#7F92FC", border: "none", }} className="check" />
                                                : 
                                            <div onClick={() => finish(item.id)} className="check" />
                                    }

                                    {
                                        item.done ? 
                                        <span style={{textDecoration: "line-through"}} className="todoContent">{item.text}</span>
                                            :
                                        <span className="todoContent">{item.text}</span>
                                    }
                                </S.Left>
                                <div onClick={() => {changeMoreState()}}   className="imgWrp">
                                    <img className="more" src={More} alt="" />
                                </div>
                            </S.TodoWrp> 
                        )) 
                }
            </S.Main>   
        </S.Wrapper>
        </>
    )
}

export default Todolist;