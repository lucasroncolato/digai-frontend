import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoot from "./AppRoot";
import "./index.css";

export default function main(App: () => JSX.Element) {
  const rootElmId = "digai-challenge";
  const rootElement = document.getElementById(rootElmId);

  if (!rootElement) {
    throw new ReferenceError(
      `Failed to find element "${rootElmId}" to render Digai-Challenge-App into.`
    );
  }

  const reactRoot = createRoot(rootElement);
  reactRoot.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  return reactRoot;
}

main(AppRoot);
