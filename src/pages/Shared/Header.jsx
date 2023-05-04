import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "react-daisyui";

const Header = () => {
  const { user } = useContext(AuthContext);

  const renderProfileButton = () => {
    if (user) {
      return (
        <Button
          className="border-none btn-circle duration-500 bg-red-600 mr-2"
          title={user.displayName}
        >
          <img className="rounded-full" src={user.photoURL} alt="" />
        </Button>
      );
    } else {
      return (
        <Link to="/login" className="text-white hover:text-red-500">
          Login
        </Link>
      );
    }
  };

  return (
    <div>
      <div className="navbar bg-black text-white mx-ato">
        <div className=" mx-auto">
          <Link to="/" className="text-3xl text-white font-bold font-mono">
            Retro<span className="text-red-500 font-mono">Food</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          {renderProfileButton()}
          {user && (
            <Link to="/logout" className="text-white hover:text-red-500">
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
