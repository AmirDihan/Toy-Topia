import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { BounceLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location)

  if (loading) {
    <BounceLoader color="#e74c3c" />;
  }
  if (!user && !loading) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
