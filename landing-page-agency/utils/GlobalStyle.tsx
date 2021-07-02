import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import gordita from "./fonts/gordita";

export default createGlobalStyle`
    ${reset}
    ${gordita}
    body {
        display: flex;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.background};
        color:#303948;
        font-family: Gordita Regular;
    }
    #__next {
        width: 1440px;
        margin: 0 auto;
    }
`;
