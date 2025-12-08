import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  let isAuth = false;
  try {
    isAuth = !!localStorage.getItem("isAuth");
  } catch (e) {
    isAuth = false;
  }

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
