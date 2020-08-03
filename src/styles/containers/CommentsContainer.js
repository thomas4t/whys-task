import styled from "styled-components";

const CommentsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 0 2% 5% 2%;
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
export default CommentsContainer;
