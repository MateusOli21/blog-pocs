import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
    border: 0;
    margin: 0;
    box-sizing: border-box;
}

body, button, input{
    font-family: Roboto, Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
}
`;
