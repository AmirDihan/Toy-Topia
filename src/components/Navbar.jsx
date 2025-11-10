import React, { useContext } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";

const Navbar = () => {
  const { loading, user, setUser, signOutFunc } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Log Out Successful");
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-semibold text-[#7546e2]"
              : "text-xl font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-semibold text-[#7546e2]"
              : "text-xl font-semibold"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn-ghost cursor-pointer text-xl">Toyzy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <BounceLoader color="#254444" size={40} />
        ) : user ? (
          <div className="btn-ghost">
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="" className=" m-1">
                <img
                  src={user?.photoURL}
                  className="h-10 w-10 rounded-full"
                  alt="User"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <p className="text-center font-semibold">{user?.displayName}</p>
                <button onClick={handleLogOut} className="btn btn-primary">
                  Log Out
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn btn-ghost">
            <FiLogIn />
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
