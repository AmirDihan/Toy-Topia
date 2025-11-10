import React from "react";
import errorImage from "../../src/assets/error-404.png";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-5">
      <img src={errorImage} alt="" />
      <h1 className="text-4xl font-semibold">Oops, Page Not Found</h1>
      <p>The page you are looking for is not available.</p>
      <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <Link to='/'>Back To Home</Link>
      </button>
    </div>
  );
}

export default ErrorPage;