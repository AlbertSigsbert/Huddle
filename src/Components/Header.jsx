import { Container } from "./Styled/Container.styled";
import { Flex } from "./Styled/Flex.styled";
import { StyledHeader, Logo, Nav, Image,  } from "./Styled/Header.styled";
import { Button } from "./Styled/Button.styled";


function Header(props) {
  return (
    <StyledHeader>
      <Container>
          <Nav>
            <Logo src="./images/logo.svg" alt="Logo" />
            <Button>Try It Free</Button>
          </Nav>

          <Flex>
            <div>
              <h1>
                <span> Build The Community</span>
                <span> Your Fans Will Love</span>
              </h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <Button bg="hsl(322, 100%, 66%)" color="#fff">
                Get Started For Free
              </Button>
            </div>

            <Image src="./images/illustration-mockups.svg" alt="Mockups"></Image>
          </Flex>
       
      </Container>
    </StyledHeader>
  );
}

export default Header;
