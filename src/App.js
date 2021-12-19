import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import { Container } from "./Components/Styled/Container.styled";
import GlobalStyles from "./Components/Styled/Global.styled";
import SmallCard from "./Components/SmallCard";
import {content} from "./content";
function App() {
  const theme = {
     colors:{
       header: '#ebfbff',
       body:'#fff',
       footer:'hsl(192, 100%, 9%)'
     },

     media:{
       mobile:'576px',
       tablet:'768px'
     },
    
  };
  return (

    <ThemeProvider theme={theme}>
      <>
       
      <GlobalStyles/>
    
          <Header />

          <Container>
             { content.map((item, index) => (
               <Card key={index} item={item} />
             ))}
              <SmallCard/>
          </Container>

         
         
          <Footer/>
       
      </>
    </ThemeProvider>
  );
}

export default App;
