import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocation } from "react-router";
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();
  // console.log(location);

  const { sendPasswordResetEmailFunc } = useContext(AuthContext);

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    // console.log("pass");
    sendPasswordResetEmailFunc(email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="w-11/12 mx-auto card bg-base-100 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form>
          <fieldset className="flex flex-col relative">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              value={email}
              onChange={(e) => {
                // console.log(e.target.value);
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <button
              onClick={(e) => {
                // console.log("reset btn clicked");
                handleResetPassword(e);
              }}
              className="btn btn-neutral mt-4"
            >
              Resest Password
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
