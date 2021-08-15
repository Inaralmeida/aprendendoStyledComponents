import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        background: ${({theme})=> theme.background};
        color: ${({theme})=> theme.text};
        font-family: monospace;
        font-size: 14px;
    }

`

