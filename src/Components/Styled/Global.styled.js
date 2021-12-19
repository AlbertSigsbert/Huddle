import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

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