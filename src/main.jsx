import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalsProvider, SaasProvider } from "@saas-ui/react";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SaasProvider>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </SaasProvider>
    </AuthProvider>
  </React.StrictMode>
);
