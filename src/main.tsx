import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./Home/ThemeContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/CREMP_Home/">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
