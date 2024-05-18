import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SaasProvider } from "@saas-ui/react";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SaasProvider>
        <App />
      </SaasProvider>
    </AuthProvider>
  </React.StrictMode>
);
