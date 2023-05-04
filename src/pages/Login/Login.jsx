import React, { useContext, useState } from "react";
import { Input, Button } from "react-daisyui";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser, googleSign, githubSign } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("ongoing" ,location);
  
  const from = location.state?.from?.pathname || '/';

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(email, password);

    signInUser(email, password)
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser)
        setError('')
        navigate(from, {replace: true})
    })
    .catch(error => {
        console.error(error)
        setError('Invalid Email or Password')
    })
  };
  

  const handleGoogleSignIn = () => {
    googleSign( )
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch((error) => {
      console.log(error.message);
    });
  }


  const handleGithubLogin = () => {
    githubSign()
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch((error) => {
      console.log(error.message);
    })
  }


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-fuchsia-300 p-6 rounded-lg shadow-lg md:w-1/2 md:h-3/4 ">
        <h2 className="text-lg font-semibold mb-8 text-center mt-12">
          Login Here
        </h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4 my-auto items-center"
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="btn btn-primary w-full">
            Log in
          </Button>
          {error && <p className="text-red-700 text-center">{error}</p>}
        </form>
        <div className="mt-10 text-center">
          <p>Or try sign up using</p>
          <div className="flex gap-4 justify-center mt-6">
            <Button onClick={handleGithubLogin} className="bg-red-400 border-none btn-circle">
              <FaGithub />
            </Button>
            <Button onClick={handleGoogleSignIn} className="bg-blue-600 border-none btn-circle">
              <FaGoogle className="" />
            </Button>
          </div>
        </div>
        <p className="text-sm mt-4">
          Don't have an account? please{" "}
          <Link
            to="/register"
            className="text-red-500 hover:underline font-bold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;