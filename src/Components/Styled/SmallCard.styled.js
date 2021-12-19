import styled from "styled-components";

export const StyledSmallCard = styled.div`
  width: 60%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 60px;
  text-align: center;
  transform: translateY(60%);
  margin-bottom: 60px;
  

 
  h2 {
    margin-bottom: 40px;
  }

  button{
    padding:20px 60px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width:100%;
    padding:40px;
    transform: translateY(70%);

    h2{
        font-size: 1em;
    }

  }
`;
