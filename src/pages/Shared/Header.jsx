import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-black text-white mx-ato">
        <div className=" mx-auto">
        <a href="#" className="text-3xl text-white font-bold">Retro<span className="text-yellow-400">Food</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-">
            <li>
              <a className="text-xl font-extrabold">Home</a>
            </li>
            <li>
              <a className="text-xl font-extrabold shadow-inner">Blog</a>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
