import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
