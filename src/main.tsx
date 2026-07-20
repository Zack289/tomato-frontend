import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { GoogleOAuthProvider } from "@react-oauth/google";

export const authService = "http://localhost:5000";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="454679056804-n7430van2pm5jl21kbpr18j9sm10gqbm.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
