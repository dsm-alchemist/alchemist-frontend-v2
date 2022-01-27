import React, { useRef, useState } from "react";
import { Close } from "../../../assets";
import useModal from "../../../utils/hooks/modal/useModal";
import styled from "styled-components";
import { COLOR } from "../../../styles";
import useMain from "../../../utils/hooks/main/useMain";
import swal from "sweetalert";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../../utils/api/axios";
import { useEffect } from "react";

interface ModalProps {
    content: string;
}

const StorageModal = () => {

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

    useEffect(() =>{
        addInput.current.focus();
    }, []);

    const submit = (e: any) => {
            if(e.key === 'Enter'){
                addTask();
            }
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
                url: "/task/storage",
                headers: {authorization: ACCESS_TOKEN},
                data: {
                    "task": content,
                }
            }).then((res) => {
                console.log(res.data);
                main.setState.setComponent(true);
                swal({
                    title: "보관함에 할 일을 추가했습니다.",
                    icon: "success",
                }).then(() => {
                    addInput.current.focus();
                })
                setData({
                    content: ""
                })
            }).catch((err) => {
                console.log(err);
                swal({
                    title: "할 일 추가에 실패했습니다.",
                    icon: "error",
                    dangerMode: true,
                });
                setData({
                    content: ""
                })
            })
        }
    }

    return(
        <>
            <Wrapper>
                <Top>
                    <span>보관함 todolist 추가</span>
                    <img src={Close} alt=""onClick={() => {modal.setState.setStorageModal(false)}}  />
                </Top>
                <InpWrapper>
                    <input ref={addInput} type="text" value={data.content} onChange={changeContent} onKeyPress={submit} placeholder="할 일을 입력하세요." />
                    <button type="button" onClick={() => {addTask();}}>추가</button>
                </InpWrapper>
            </Wrapper>
            <Remove onClick={() => {modal.setState.setStorageModal(false)}} />
        </>
    )
}

const Wrapper = styled.div`
    position: absolute;
    z-index: 3;
    background: none;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
`

const Top = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span{
        padding-bottom: 20px;
        font-size: 20px;
        margin-left: 10px;
    }
    & img{
        width: 18px;
        height: 18px;
        cursor: pointer;
        margin-right: -20px;
        margin-bottom: 10px;
    }
`

const InpWrapper = styled.div`
    width: 530px;
    border-radius: 7px;
    background: ${COLOR.whiteColor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    & input{
        width: 400px;
        height: 45px;
        border: none;
        background: #E5E5E5;
        border-radius: 7px;
        margin: 15px 0;
        font-size: 14px;
        text-indent: 15px;
    }

    & button{
        width: 60px;
        height: 30px;
        background: #797979;
        border: none;
        border-radius: 7px;
        color: ${COLOR.whiteColor};
    }
`

const Remove = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 2;
    height: 100vh;
    background: rgba(209,209,209,0.7);
    cursor: pointer;
`

export default StorageModal;