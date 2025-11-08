import React, { useState } from "react";
import { Link } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleSignupWithEmailPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regEx.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character[@$!%*?&]."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Sign Up successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto card bg-base-100 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="relative" onSubmit={handleSignupWithEmailPassword}>
          <fieldset className="fieldset">
            <label className="label">First Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your first name"
            />
            <label className="label">Last Name</label>
            <input type="text" className="input" placeholder="Your last name" />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type={show ? "text" : "password"}
              className="input"
              name="password"
              placeholder="Password"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-6 top-63 z-10"
            >
              {show ? <IoEyeOff></IoEyeOff> : <FaEye></FaEye>}
            </span>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already have an account? please{" "}
          <span className="text-purple-600">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
