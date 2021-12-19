import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
 
  

  & > div,
  & > ul {
    flex: 1;
  }

  h1 > span {
    display: flex;
    flex-direction: column;
  }
  p {
    margin: 40px 0;
    font-weight: 400;
    font-size:1em;
   
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
   flex-direction: column;
   text-align: center;

   h1{
    font-size: 1.5em;
  
  }
 
  p{
    font-size: 1.2em;
    text-align: center;
    line-height: 1.2;
  }
  }
 
`;
