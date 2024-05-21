import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalsProvider, SaasProvider } from "@saas-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme as baseTheme } from "@saas-ui/react";
import AuthProvider from "./contexts/AuthContext/AuthProvider.jsx";

const theme = extendTheme(
  {
    fonts: {
      heading: "Golos Text, sans-serif",
      body: "Golos Text, sans-serif",
    },
  },
  baseTheme
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SaasProvider theme={theme}>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </SaasProvider>
    </AuthProvider>
  </React.StrictMode>
);
