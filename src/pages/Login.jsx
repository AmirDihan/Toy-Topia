import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-11/12 mx-auto card bg-base-100 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          New to our website? please{" "}
          <span className="text-purple-600">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
