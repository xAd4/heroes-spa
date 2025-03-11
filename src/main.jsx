import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HeroesSPA } from "./HeroesSPA";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesSPA />
    </BrowserRouter>
  </StrictMode>
);
