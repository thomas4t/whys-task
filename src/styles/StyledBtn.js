import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledBtn = styled(Button)`
  background: ${(props) => props.theme.colors.lightBlue};
  :hover {
    background: #fff;
    color: #000;
    font-weight: bold;
  }
`;
export default StyledBtn;
