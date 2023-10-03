import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle } from "styled-components";
import "./css/fonts.css";

import "./locales/i18n";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'GmarketSans';
    height: 100vh;
  }
  #root {
    height: 100vh;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
