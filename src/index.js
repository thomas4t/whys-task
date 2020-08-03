import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    lightBlue: "#61dafb",
    darkGrey: "#282c34",
    babyBlue: "#BFD7ED",
    blueGrotto: "#60A3D9",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("APP")
);
