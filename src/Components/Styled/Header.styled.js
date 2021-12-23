import styled from "styled-components";

export const StyledHeader = styled.main`
  background-color: #ebfbff;
  background-image: url('./images/bg-hero-desktop.svg');
  padding: 40px 0;

  h1 {
    font-family: "Poppins" sans-serif;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    background-image: url('./images/bg-hero-mobile.svg');
    button:first-child {
      padding: 7px 30px;
    }
  }
`;

export const BackgroundImage = styled.img`
  
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  /* url(${(bgImageDesktop)=> bgImageDesktop }) */
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 40%;
  }
`;

export const Image = styled.img`
  width: 600px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
   margin: 40px 0 30px;
  }
`;
