import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="w-11/12 mx-auto card bg-base-100 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form>
          <fieldset className="fieldset">
            <label className="label">First Name</label>
            <input type="text" className="input" placeholder="Your first name" />
            <label className="label">Last Name</label>
            <input type="text" className="input" placeholder="Your last name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already have an account? please{" "}
          <span className="text-purple-600">
            <Link to='/login'>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
