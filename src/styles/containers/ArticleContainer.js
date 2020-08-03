import styled from "styled-components";

const ArticleContainer = styled.div`
  width: 60%;
  margin: 2% auto;
  padding: 2%;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 1200px) {
    width: 70%;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;
export default ArticleContainer;
