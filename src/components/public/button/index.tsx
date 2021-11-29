import React, { FC, HTMLProps } from "react";
import * as S from "./styles";

interface ButtonProps extends HTMLProps<HTMLButtonElement>{
    iconSrc: any;
    title: string;
}

const Button: FC<ButtonProps> = (props) => {
    return(
        <S.Wrapper>
            <S.Btn>
                <img src={props.iconSrc} alt="" />
            </S.Btn>
            <S.Title>{props.title}</S.Title>
        </S.Wrapper>
    )
}

export default Button;