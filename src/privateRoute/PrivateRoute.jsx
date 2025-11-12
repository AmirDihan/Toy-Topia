import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { BounceLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  // console.log(loading)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BounceLoader color="#e74c3c" />;
      </div>
    )
  }
  // console.log(loading)
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
