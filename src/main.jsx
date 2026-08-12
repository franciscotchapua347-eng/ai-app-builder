import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main>
      <h1>AI App Builder</h1>
      <p>Crie aplicações com inteligência artificial.</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
