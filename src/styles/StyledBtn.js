import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledBtn = styled(Button)`
  background: ${(props) => props.theme.colors.lightBlue} !important;
  :hover {
    background: #fff !important;
    color: #000 !important;
    font-weight: bold !important;
  }
`;
export default StyledBtn;
