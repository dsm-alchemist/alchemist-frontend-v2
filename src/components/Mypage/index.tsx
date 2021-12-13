import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Profile from "../profile";
import { More, BaseProfile } from "../../assets";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../utils/api/axios";
import useModal from "../../utils/hooks/modal/useModal";
import useTask from "../../utils/hooks/task/useTask";
import MoreModal from "../Main/todolist/moreModal";
import Modal from "../Main/todolist/plusModal";
import EditModal from "../Main/todolist/editModal";
import PushModal from "../Main/todolist/pushModal";
import useMain from "../../utils/hooks/main/useMain";
import useDate from "../../utils/hooks/date/useDate";
import UserBox from "./userBox";

const Mypage = () => {

    const today = new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString() + new Date().getDate().toString();
    const tomorrow = Number(new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString() + (new Date().getDate() + 1).toString());

    const [list, setList] = useState<any[]>([]);

    const modal = useModal();
    const task = useTask();
    const main = useMain();
    const date = useDate();

    useEffect(() => {
        date.setState.setTomorrow(tomorrow);
    }, [])

    const getTask = () => {
        requestWithAccessToken({
            method: "GET",
            url: `/task?date=${today}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data.taskList);
            setList(res.data.taskList);
        }).catch((err) => {
            console.log(err);
        })
    };

    const changeMoreState = (e: any) => {
        modal.setState.setMoreModal(true);
        task.setState.setTaskId(e.task_id);
    }

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

    useEffect(() => {
        main.setState.setComponent(false);
        getTask();
    }, [main.state.todoRender]);

    useEffect(() => {
        getTask();
    }, [date.state.tdDay]);


    return (
        <>
        {
            !modal.state.todoModalState ? 
                null : <Modal />
        }
        {
            !modal.state.moreModalState ? 
                null : <MoreModal />
        }
        {
            !modal.state.editModalState ? 
                null : <EditModal />
        }
        {
            !modal.state.pushModalState ? 
                null : <PushModal />
        }
        <S.Wrapper>
            <S.Modal>
                <S.Profile>
                    <Profile />
                    <S.Todo>
                        <p className="title">오늘 할 일</p>
                        {
                            list.map((e, index) => (
                                <S.TodoWrp className="todoWrp">
                                    <S.Left>
                                        {!e.done ?
                                        <div onClick={() => finish(list[index])} className="check" />
                                            :
                                        <div onClick={() => finish(list[index])} style={{ background: "#7F92FC", border: "none", }} className="check" />}    

                                        {!e.done ?
                                        <span className="todoContent">{e.task}</span>
                                            :
                                        <span style={{ textDecoration: "line-through" }} className="todoContent">{e.task}</span>}
                                    </S.Left>
                                    {!e.done ?
                                        <div onClick={() => changeMoreState(list[index])} className="imgWrp">
                                            <img className="more" src={More} alt="" />
                                        </div>
                                            :
                                        <div style={{opacity: 0.3}} className="imgWrp">
                                            <img className="more" src={More} alt="" />
                                        </div>}
                                </S.TodoWrp>
                            ))
                        }
                    </S.Todo>
                </S.Profile>
                <UserBox />
            </S.Modal>
        </S.Wrapper>
        </>
    )
}

export default Mypage;