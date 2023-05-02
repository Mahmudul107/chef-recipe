import React, { useState } from "react";
import { Input, Button } from "react-daisyui";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate input values
    const newErrors = {};
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!email) {
      newErrors.email = "Email cannot be empty";
    }
    if (!password) {
      newErrors.password = "Password cannot be empty";
    }
    // Display errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle registration logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-fuchsia-300 p-6 rounded-lg shadow-lg md:w-1/2">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Register Here
        </h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col h-full space-y-4 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="input w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <Input
              type="text"
              placeholder="Enter your photo URL"
              className="input w-full"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="text-red-500 text-xs mb-12">{errors.password}</span>
            )}
          </div>
          <Button type="submit" className="btn btn-primary w-full">
            Register
          </Button>

          <p className="">
            <small>
              Already have an account ? please{" "}
              <Link
                className="text-primary-500 hover:underline font-bold"
                to="/login"
              >
                Login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
