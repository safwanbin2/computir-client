import { LoadingOverlay, LoadingSpinner } from "@saas-ui/react";
import React from "react";

const LoadingScreen = () => {
  return (
    <LoadingOverlay className="min-h-screen">
      <LoadingSpinner size="lg" color="primary.500" thickness="4px" />
    </LoadingOverlay>
  );
};

export default LoadingScreen;
