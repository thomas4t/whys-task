import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const MainContainer = styled(Paper)`
  width: 60%;
  margin: auto;
  background: ${(props) => props.theme.colors.darkBackground} !important;
  color: #fff !important;
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
export default MainContainer;
