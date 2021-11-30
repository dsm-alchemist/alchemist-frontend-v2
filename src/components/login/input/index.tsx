import React, { FC, HTMLProps } from "react";
import * as S from "./styles";


interface InputProps extends HTMLProps<HTMLInputElement> {
    title: string;
};
const Input: FC<InputProps> = (props) => {
    const reset = props as any;
    return (
        <S.Wrapper>
            <S.Title>{props.title}</S.Title>
            <S.InputBox {...reset}></S.InputBox>

        </S.Wrapper>
    )
}

export default Input;