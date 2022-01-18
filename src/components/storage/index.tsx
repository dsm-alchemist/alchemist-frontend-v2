import React, { useEffect, useState } from "react";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../utils/api/axios";
import { More } from "../../assets";
import * as S from "./styles";
import useModal from "../../utils/hooks/modal/useModal";
import useTask from "../../utils/hooks/task/useTask";
import TaskModal from "../Main/todolist/taskModal";
import PushModal from "../Main/todolist/pushModal";
import EditModal from "../Main/todolist/editModal";
import useMain from "../../utils/hooks/main/useMain";

const Storage = () => {

    const [storage, setStorage] = useState<any[]>([]);

    const modal = useModal();
    const main = useMain();
    const task = useTask();

    const getStorageTask = () => {
        requestWithAccessToken({
            method: "GET",
            url: "/task/storage",
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setStorage(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    const changeTaskState = (e: any) => {
        modal.setState.setTaskModal(true);
        task.setState.setTaskId(e.storage_id);
    }

    useEffect(() => {
        main.setState.setComponent(false);
        getStorageTask();
    }, [main.state.todoRender]);

    return(
        <>
        {
            !modal.state.taskModalState ? 
                null : <TaskModal />
        }
        {
            !modal.state.pushModalState ? 
                null : <PushModal />
        }
        {
            !modal.state.editModalState ? 
                null : <EditModal />
        }
        <S.Wrapper>
            <S.Modal>
                <S.Top>
                    <p>보관함</p>
                </S.Top>
                <S.TodoWrapper className="todoWrap">
                    <S.Main>
                        {
                            storage.map((e, index) => (
                                <S.TodoWrp>
                                    <S.Left>
                                            <span className="todoContent">{e.task}</span>
                                    </S.Left>
                                        <div onClick={() => {changeTaskState(storage[index])}} className="imgWrp">
                                            <img className="more" src={More} alt="" />
                                        </div>
                                </S.TodoWrp>
                            ))
                        }
                    </S.Main>
                </S.TodoWrapper>
            </S.Modal>
        </S.Wrapper>
        </>
    )
}

export default Storage;