import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import { Container } from "./Components/Styled/Container.styled";
import GlobalStyles from "./Components/Styled/Global.styled";
import SmallCard from "./Components/SmallCard";
import { content } from "./content";
function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "hsl(192, 100%, 9%)",
    },

    media: {
      mobile: "576px",
      tablet: "768px",
    },
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Huddle</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <GlobalStyles />
        <main>
        <Header />
        <article>
          <Container>
            {content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
            <SmallCard />
          </Container>
        </article>

        <Footer />
        </main>
      
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
