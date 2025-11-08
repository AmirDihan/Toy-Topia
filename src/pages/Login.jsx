import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        toast.success("Login successful");
        e.target.reset();
      })
      .catch((error) => toast.error(error.message));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successful");
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message)
        toast.error(error.message)
      });
  };
  const handleGoogleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        toast.success("Login successful using google");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="w-11/12 mx-auto card bg-base-100 max-w-sm shrink-0 shadow-2xl">
      {user ? (
        <div className="w-full mx-auto text-center space-y-2">
          <img
            src={user.photoUrl}
            className="w-20 h-20 rounded-full mx-auto"
            alt=""
          />
          <p>{user.email}</p>
          <button onClick={handleSignOut} className="btn btn-active">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="flex flex-col relative">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <span
                onClick={() => setShow(!show)}
                className="absolute right-6 top-24 z-10"
              >
                {show ? <IoEyeOff></IoEyeOff> : <FaEye></FaEye>}
              </span>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <button
            onClick={handleGoogleLogIn}
            className="btn bg-white mt-4 text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            New to our website? please{" "}
            <span className="text-purple-600">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
