import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthProvider";
import LoadingScreen from "../components/ui/LoadingScreen";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <LoadingScreen />
      // <div className="h-screen w-full flex justify-center items-center">
      //   <h1>loading...</h1>
      // </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
