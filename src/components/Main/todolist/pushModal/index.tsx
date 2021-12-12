import React, { useEffect, useState } from "react";
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

const PushModal = () => {

    const task = useTask();
    const main = useMain();
    const modal = useModal();

    const [data, setData] = useState<ModalProps>({
        content: "",
    })

    const {content} = data;

    const contentChange = (e: any) => {
        setData({
            ...data,
            content: e.target.value
        });
    }
    

    const submit = (e: any) => {
            if(e.key === 'Enter'){
                pushTask();
            }
    }

    const changeState = () => {
        modal.setState.setPushModal(false);
    }

    const pushTask = () => {
        const changed = (data.content.substring(0,4)) + (data.content.substring(5,7)) + (data.content.substring(8, 10));

        if(changed.length == 0) {
            swal({
                title: "날짜를 입력해 주세요",
                icon: "error",
                dangerMode: true
            })
            return false;
        }

        else{
            requestWithAccessToken({
                method: "POST",
                url: `/task/${task.state.taskId}?date=${changed}`,
                headers:{authorization: ACCESS_TOKEN},
                data: {},
            }).then((res) => {
                console.log(res);
                swal({
                    title: "오늘 할 일을 미뤘습니다.",
                    icon: "success"
                }).then(() => { 
                    main.setState.setComponent(true);
                    modal.setState.setPushModal(false);
                })
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return(
        <>
            <S.Wrapper>
                <S.Top>
                    <span>날짜 바꾸기</span>
                    <img src={Close} alt="" onClick={changeState}  />
                </S.Top>
                <S.InpWrapper>
                    <input type="date" onChange={contentChange}  onKeyDown={submit} placeholder="할 일을 입력하세요." />
                    <button type="button" onClick={pushTask}>바꾸기</button>
                </S.InpWrapper>
            </S.Wrapper>
            <S.Close onClick={changeState} />
        </>
    )
}

export default PushModal;