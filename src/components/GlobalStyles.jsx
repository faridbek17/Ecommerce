import { createGlobalStyle } from "styled-components";

export const GlobalStayles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
    color: inherit;
}

ul,
ol,
li{
    list-style: none;
}

html,
body{
    height: 100%;
}

.wrapper{
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.main{
    flex: 1 1 auto;
}

`
