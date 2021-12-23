import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  column-gap: 6em;
  flex-direction: ${ ({ layout}) => layout || 'row' };

  & > div {
    flex: 1;
  }

 
 
  h2 {
    margin-bottom: 20px;
  }

  p {
    opacity: 0.6;
  }
  img {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 4em;
    padding: 40px;
    text-align: center;

    & > div:first-child {
      order: 2;
    }
    & > div:last-child {
      order: 1;
    }
    img {
      width: 100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 40px;
    column-gap: 1em;
    img {
      width: 80%;
    }
  }
`;
