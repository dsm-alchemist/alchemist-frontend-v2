import React, { useEffect, useState } from "react";
import * as S from "./styles";
import OtherProfile from "./otherProfile";
import { More } from "../../assets";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../utils/api/axios";
import swal from "sweetalert";

interface SetTaskProps{
    content: string;
}

const OtherUser = () => {

    const today = new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString() + new Date().getDate().toString();

    const [list, setList] = useState<any[]>([]);
    const [data, setData] = useState<SetTaskProps>({
        content: ""
    });

    const contentChange = (e: any) => {
        setData({
            ...data,
            content: e.target.value
        })
    }

    const getTdTask = () => {
        requestWithAccessToken({
            method: "GET",
            url: `/task/${localStorage.getItem("otherEmail")}?date=${today}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setList(res.data.taskList);
        }).catch((err) => {
            console.log(err);
        })
    };

    const getSetTask = () => {
        const changed = (data.content.substring(0,4)) + (data.content.substring(5,7)) + (data.content.substring(8, 10));
        
        requestWithAccessToken({
            method: "GET",
            url: `/task/${localStorage.getItem("otherEmail")}?date=${changed}`,
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res.data);
            setList(res.data.taskList);
        }).catch((err) => {
            console.log(err);
        });
    }

    const tdDate = new Date().getFullYear().toString() + "-" + (new Date().getMonth() + 1).toString() + "-" + new Date().getDate().toString();

    useEffect(() => {
        getTdTask();
        console.log(tdDate);
        
    }, []);

    return(
        <S.Wrapper>
            <S.Modal>
                <S.LeftSide>
                    <S.LeftTop>
                        <input type="date" onChange={contentChange} />
                        <button onClick={getSetTask} type="button">적용</button>
                    </S.LeftTop>
                    {
                        list.map((e) => (
                            <S.TodoWrapper className="todoWrp">
                                <S.Left>
                                {
                                    !e.done ?  
                                    <>
                                        <div onClick={() => {swal({title: "다른 유저의 상태를 바꿀 수 없습니다.", icon: "warning"})}}  className="check" />
                                        <span className="todoContent">{e.task}</span>
                                    </>
                                        :
                                    <>
                                        <div onClick={() => {swal({title: "다른 유저의 상태를 바꿀 수 없습니다.", icon: "warning"})}} style={{ background: "#7F92FC", border: "none", }} className="check" />
                                        <span style={{ textDecoration: "line-through" }} className="todoContent">{e.task}</span>
                                    </>
                                }
                                </S.Left>
                                    <div style={{opacity: 0.3}} className="imgWrp">
                                        <img className="more" src={More} alt="" />
                                    </div>
                            </S.TodoWrapper>
                        ))
                    }
                    
                </S.LeftSide>
                <S.Right>
                    <OtherProfile />
                    <S.Todo>
                        <p className="title">오늘 할 일</p>
                            {
                                list.map((e) => (
                                    <S.TodoWrp className="todoWrp">
                                        <S.Left>
                                            {
                                                !e.done ?  
                                                <>
                                                    <div onClick={() => {swal({title: "다른 유저의 상태를 바꿀 수 없습니다.", icon: "warning"})}} className="check" />
                                                    <span className="todoContent">{e.task}</span>
                                                </>
                                                    :
                                                <>
                                                    <div onClick={() => {swal({title: "다른 유저의 상태를 바꿀 수 없습니다.", icon: "warning"})}} style={{ background: "#7F92FC", border: "none", }} className="check" />
                                                    <span style={{ textDecoration: "line-through" }} className="todoContent">{e.task}</span>
                                                </>
                                            }
                                        </S.Left>
                                            <div style={{opacity: 0.3}} className="imgWrp">
                                                <img className="more" src={More} alt="" />
                                            </div>
                                    </S.TodoWrp>
                                ))
                            }

                            
                    </S.Todo>
                </S.Right>
            </S.Modal>
        </S.Wrapper>
    )
}

export default OtherUser;