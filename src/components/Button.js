import React from "react";

import StyledBtn from "../styles/StyledBtn";

const Button = ({ text, onClick }) => {
  return (
    <StyledBtn
      variant="contained"
      color="primary"
      size="small"
      onClick={() => onClick()}
    >
      {text}
    </StyledBtn>
  );
};

export default Button;
