import React from "react";
import * as S from "./styles";
import {Logo, ImgLogo} from "../../../assets/index";
import { useHistory } from "react-router-dom";

const Header = () => {

    const history = useHistory();

    return(
        <S.Wrapper>
            <S.Left>
                <Logo />
            </S.Left>
            <S.Right>
                <ul>
                    <li onClick={() => history.push("/")}>ranking</li>
                    <li onClick={() => history.push("/")}>timer</li>
                    <li onClick={() => history.push("/")}>my page</li>
                </ul>
                <ImgLogo />
            </S.Right>
        </S.Wrapper>
    )
}

export default Header;