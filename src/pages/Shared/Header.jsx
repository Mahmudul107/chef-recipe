import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "react-daisyui";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderProfileButton = () => {
    if (user) {
      return (
        <Button
          className="border-none btn-circle duration-500 mr-2"
          title={user.displayName}
        >
          {user?.photoURL ? (
            <img className="rounded-full" src={user.photoURL} alt="" />
          ) : (
            <FaUser />
          )}
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
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          {renderProfileButton()}
          {user && (
            <Link
              onClick={handleLogout}
              className="text-white hover:text-red-500"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
