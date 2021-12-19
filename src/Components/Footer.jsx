import SocialIcons from "./SocialIcons";
import { Container } from "./Styled/Container.styled";
import { StyledFooter } from "./Styled/Footer.styled";
import { Grid } from "./Styled/Grid.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo-white.svg" alt="logo-white" />
        <Grid>
          <ul>
            <li>
            <span><img src="./images/icon-location.svg" alt="location-icon" /></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
            <span><img src="./images/icon-phone.svg" alt="phone-icon" /></span>
               +1-543-123-4567
            </li>
            <li>
            <span><img src="./images/icon-email.svg" alt="email-icon" /></span>
                example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons/>
        </Grid>

        <p> &copy; Copyright 2018 Huddle. All rights reserved.</p>

      </Container>
    </StyledFooter>
  );
}
