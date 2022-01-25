import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// npm i styled-reset
// npm i --save-dev @types/styled-components

const GlobalStyle = createGlobalStyle`
    ${reset};
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family:Arial, Helvetica, sans-serif;
        .swal-wide{
            width: 400px;
        }
    }
    *{
        -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;  
    }
    a{
        text-decoration:none;
    }
    button{
        outline:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
    ul{
        list-style:none;
    }
    input:-webkit-autofill { 
        box-shadow: 0 0 0 30px transparent inset ; 
    } 
`;

export default GlobalStyle;