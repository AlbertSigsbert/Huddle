import styled from "styled-components";

export const Container = styled.main `
  width:1200px;
  max-width:100%;
  padding:0 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width:700px;
  }
`
