import React, { useState } from "react";
import { Input, Button } from "react-daisyui";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    // replace with your own login logic here
    const email = e.target.email.value;
    const password = e.target.password.value;
   
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-fuchsia-300 p-6 rounded-lg shadow-lg md:w-1/2 md:h-3/4 ">
        <h2 className="text-lg font-semibold mb-8 text-center mt-12">Login Here</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4 my-auto items-center">
          <Input type="email" name="email" placeholder="Email" className="w-full" />
          <Input type="password" name="password" placeholder="Password" className="w-full" />
          <Button type="submit" className="btn btn-primary w-full">
            Log in
          </Button>
          {error && (
            <p className="text-red-700 text-center">{error}</p>
          )}
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
