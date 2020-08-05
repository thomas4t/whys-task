import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";

const theme = {
  colors: {
    darkBackground: "#0D0221",
    lightBlue: "#4B88A2",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("APP")
);
