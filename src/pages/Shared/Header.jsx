import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "react-daisyui";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

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
        <Link
          to="/login"
          className="bg-red-600 hover:bg-red-400 duration-700 ml-2 text-white font-bold py-2 px-4 rounded-3xl"
        >
          Login
        </Link>
      );
    }
  };

  return (
    <div>
      <div className="navbar bg-black text-white mx-ato">
        <div className=" mx-auto flex items-center justify-between">
          <div>
            <Link to="/" className="text-3xl text-white font-bold font-mono">
              Retro<span className="text-red-500 font-mono">Food</span>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="navbar-toggler flex items-center focus:outline-none"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } lg:flex navbar-center`}
        >
          <ul className="menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setShowMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setShowMenu(false)}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mx-auto flex items-center">
          {renderProfileButton()}
          {user && (
            <Link
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-400 duration-700 ml-2 text-white font-bold py-2 px-4 rounded-3xl"
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
