import styled from "styled-components";

const ArticleContainer = styled.div`
  width: 60%;
  margin: 2% auto;
  padding: 2%;
  background: ${(props) => props.theme.colors.lightBlue};
  border-radius: 0 0 5px 5px;
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
