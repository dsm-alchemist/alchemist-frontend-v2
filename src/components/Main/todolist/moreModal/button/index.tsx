import React, { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import * as S from "./styles";

interface ButtonProps extends HTMLProps<HTMLButtonElement>{
    title: string;
    imgSrc: string;
}

const Button: FC<ButtonProps> = (props) => {
    return(
        <S.Wrapper>
            <S.ImgWrp>
                <img src={props.imgSrc} alt="" />
            </S.ImgWrp>
            <p>{props.title}</p>
        </S.Wrapper>
    )
}

export default Button;