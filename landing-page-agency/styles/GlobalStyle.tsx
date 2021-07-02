import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import gordita from "utils/fonts/gordita";

export default createGlobalStyle`
    ${reset}
    ${gordita}
    body {
        display: flex;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.background};
        color:#303948;
        font-family: Gordita Regular;
        font-size:${({ theme }) => theme.fontSizes.regular}
    }
    h1{
        font-size:${({ theme }) => theme.fontSizes.h1};
        font-weight: bold;
        margin: 15px 0 15px 0;
    }
    h2{
        font-size:${({ theme }) => theme.fontSizes.h2};
        font-weight: bold;
        margin: 10px 0 10px 0;
    }
    #__next {
        width: 1440px;
        margin: 0 auto;
        padding: 54px 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
