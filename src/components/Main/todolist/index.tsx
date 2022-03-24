import React, { useEffect, useState } from "react";
import useDate from "../../../utils/hooks/date/useDate";
import * as S from "./styles";
import { Plus } from "../../../assets/index";
import useModal from "../../../utils/hooks/modal/useModal";
import {More} from "../../../assets/index";
import useMain from "../../../utils/hooks/main/useMain";
import { requestWithAccessToken, ACCESS_TOKEN } from "../../../utils/api/axios";
import useTask from "../../../utils/hooks/task/useTask";

const Todolist = () => {

    const date = useDate();
    const modal = useModal();
    const task = useTask();
    const main = useMain();

    

    const [list, setList] = useState<any[]>([]);

    const changeTodoState = () => {
        modal.setState.setTodoModal(true);
    }

    const changeMoreState = (e: any) => {
        modal.setState.setMoreModal(true);
        task.setState.setTaskId(e.task_id);
    }

    useEffect(() => {
        modal.setState.setTaskModal(false);
    }, [])

    const getTdTask = () => {
        requestWithAccessToken({
            method: "GET",
            url: `/task?date=${date.state.tdDay}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setList(res.data.taskList);
            localStorage.setItem("name", res.data.userName);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        main.setState.setComponent(false);
        console.log("render");
        getTdTask();
    },[main.state.todoRender]);
    
    useEffect(() => {
        getTdTask();
    }, [date.state.tdDay]);

    const [value, setValue] = useState<any>();


    const finish = (e: any) => {
        e.done = e.done ? false : true;
        console.log(e)
        requestWithAccessToken({
            method: "PUT",
            url: `/task/done/${e.task_id}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {
                "isDone": e.done
            }
        }).then((res) => {
            console.log(res);
            setValue({});
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <>
        <S.Wrapper>
            <S.Top>
                <span>{date.state.tdDay.toString().substring(4,6)}월 {date.state.tdDay.toString().substring(6,8)}일</span>
                <img src={Plus} alt=""  onClick={changeTodoState} />
            </S.Top>
            
            <S.Main className="main">
            <S.TodoWrp>
                            <S.Left>
                                    <div className="check" />
                                    <span className="todoContent">ㅁㄴㅇㄴㅇㅁㄴㅇㅁㄴㅇ</span>
                            </S.Left>
                            <div onClick={() => { changeMoreState(list[0]); } } className="imgWrp">
                                    <img className="more" src={More} alt="" />
                                </div>
                        </S.TodoWrp>
                {
                    list.map((e, index) => (
                        <S.TodoWrp>
                            <S.Left>
                                {!e.done ?
                                    <div onClick={() => { finish(list[index]); console.log(e.done); } } className="check" />
                                    :
                                    <div onClick={() => { finish(list[index]); console.log(e.done); } } style={{ background: "#7F92FC", border: "none", }} className="check" />}
                                {!e.done ?
                                    <span className="todoContent">{e.task}</span>
                                    :
                                    <span style={{ textDecoration: "line-through" }} className="todoContent">{e.task}</span>}
                            </S.Left>
                            {!e.done ?
                                <div onClick={() => { changeMoreState(list[index]); } } className="imgWrp">
                                    <img className="more" src={More} alt="" />
                                </div>
                                :
                                <div style={{opacity: 0.3}} className="imgWrp">
                                    <img className="more" src={More} alt="" />
                                </div>}
                        </S.TodoWrp>
                    ))
                }
            </S.Main>   
        </S.Wrapper>
        </>
    )
}

export default Todolist;