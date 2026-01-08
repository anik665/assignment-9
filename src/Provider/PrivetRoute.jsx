import React, { use } from "react";
import { AuthContex } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContex);
  const location = useLocation();
  console.log(location);
  console.log(user, loading);
  if (loading) {
    return <loading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};

export default PrivetRoute;
