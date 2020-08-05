import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledMUIButton = styled(Button)`
  background: ${(props) => props.theme.colors.lightBlue};
  :hover {
    background: #fff;
    color: #000;
    font-weight: bold;
  }
`;

const CustomButton = ({ text, onClick }) => {
  return (
    <StyledMUIButton
      variant="contained"
      color="primary"
      size="small"
      onClick={() => onClick()}
    >
      {text}
    </StyledMUIButton>
  );
};

export default CustomButton;
