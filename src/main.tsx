import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "leaflet/dist/leaflet.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";
import { SocketProvider } from "./context/SocketCotext.tsx";

export const authService = "https://tomato-auth-sr8t.onrender.com";
export const restaurantService = "https://tomato-restaurant-98z1.onrender.com";
export const utilsService = "https://tomato-utils-525v.onrender.com";
export const realtimeService = "https://tomato-realtime-bdsq.onrender.com";
export const riderService = "https://tomato-rider-bctd.onrender.com";
export const adminService = "https://tomato-admin-l06q.onrender.com";

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
