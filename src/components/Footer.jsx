import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 md:place-items-center bg-[#faf7ef] text-base-content p-5 md:p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://linkedin.com/in/amir-hossan-15ab5029b">
            <FaLinkedin size={30} />
          </Link>
          <Link to="https://github.com/AmirDihan">
            <FaGithub size={30}></FaGithub>
          </Link>
          <Link to="https://www.facebook.com/AmirDihan">
            <FaFacebook size={30} />
          </Link>
        </div>
      </nav>
      <div className="md:col-span-3">
        <p>Copyright © 2025 - Amir Hossan Dihan</p> 
      </div>
    </footer>
  );
};

export default Footer;
