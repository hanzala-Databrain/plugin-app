import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@databrainhq/plugin/web";

window.dbn = {
  baseUrl: "https://uat-express-as.azurewebsites.net",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
