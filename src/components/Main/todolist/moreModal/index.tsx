import React from "react";
import * as S from "./styles";
import { ChangeDate, Delete, Edit, Push, Storage } from "../../../../assets";
import Button from "./button";

const MoreModal = () => {
    return(
        <>
            <S.Back>
                <S.Wrapper>
                    <Button title={"수정"} imgSrc={Edit} />
                    <Button title={"내일하기"} imgSrc={Push} />
                    <Button title={"날짜 바꾸기"} imgSrc={ChangeDate} />
                    <Button title={"보관함으로"} imgSrc={Storage} />
                    <Button title={"삭제"} imgSrc={Delete} />
                </S.Wrapper>
            </S.Back>
            <S.Close></S.Close>
        </>
    )
}

export default MoreModal;