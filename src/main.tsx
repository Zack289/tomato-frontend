import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "leaflet/dist/leaflet.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";
import { SocketProvider } from "./context/SocketCotext.tsx";

export const authService = "http://localhost:5000";
export const restaurantService = "http://localhost:5001";
export const utilsService = "http://localhost:5002";
export const realtimeService = "http://localhost:5004";
export const riderService = "http://localhost:5005";
export const adminService = "http://localhost:5006";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="454679056804-n7430van2pm5jl21kbpr18j9sm10gqbm.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
