import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Placeholder } from "./screens/Placeholder";

const normalizedPath = window.location.pathname.replace(/\/+$/, "");
if (normalizedPath === "/secret") {
  window.location.replace("https://thedao-frontend.blossom.deno.net/");
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Placeholder />
  </StrictMode>
);
