import styled from "styled-components";

export const Container = styled.div `
  width:1200px;
  max-width:100%;
  padding:40px 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width:700px;
  }
`
