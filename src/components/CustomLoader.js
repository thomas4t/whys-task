import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  margin-top: 5%;
`;

const CustomLoader = ({ message }) => {
  return (
    <div>
      <span>
        <strong>{message}</strong>
      </span>
      <LoaderContainer>
        <Loader type="TailSpin" color="#00BFFF" height={"10%"} width={"10%"} />
      </LoaderContainer>
    </div>
  );
};

export default CustomLoader;
