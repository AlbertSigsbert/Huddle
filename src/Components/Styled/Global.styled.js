import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
 background-color:${({theme}) => theme.colors.body};
 color:hsl(192, 100%, 9%);
 font-family:'Open Sans', sans-serif;
 font-size:18px;
}
img{
    max-width:100%;
}

p{
    line-height:1.5;  
}

h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.5;
}


`;

export default GlobalStyles;