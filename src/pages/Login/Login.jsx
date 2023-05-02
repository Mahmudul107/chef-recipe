import React from "react";
import { Input, Button } from "react-daisyui";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-fuchsia-200 p-6 rounded-lg shadow-lg w-1/2 h-3/4 ">
        <h2 className="text-lg font-semibold mb-4">Log in</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <Input type="email" placeholder="Email" className="w-full" />
          <Input type="password" placeholder="Password" className="w-full" />
          <Button type="submit" className="btn btn-primary w-full">
            Log in
          </Button>
        </form>
        <div className="mt-10 text-center">
          <p>Or sign up using</p>
          <div className="flex gap-4 justify-center mt-6">
            <Button className="bg-red-400 border-none btn-circle">
              <FaGithub />
            </Button>
            <Button className="bg-blue-600 border-none btn-circle">
              <FaGoogle className=""/>
            </Button>
          </div>
        </div>
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary-500 hover:underline font-bold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
