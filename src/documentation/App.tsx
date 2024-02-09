import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { TopBar } from "./navigation";
import "./index.css";
import { Container } from "./style/Container";

export const App = () => {
  return (
    <Container>
      <TopBar />
      <Router />
    </Container>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
