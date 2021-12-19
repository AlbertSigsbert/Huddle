import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 4fr));
  column-gap: 2.5rem;
  margin: 40px 0;


  & > ul:first-child{
      grid-column: 1/3;
      width: 90%;
  }

 

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
    column-gap: 0;

    & > ul:first-child{
      grid-column: 1;
      width: 100%;
  }
  }

 
 
`;
