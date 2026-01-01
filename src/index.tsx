import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Placeholder } from "./screens/Placeholder";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Placeholder />
  </StrictMode>,
);
