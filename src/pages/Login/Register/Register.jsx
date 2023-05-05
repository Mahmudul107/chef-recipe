import React, { useContext, useState } from "react";
import { Input, Button } from "react-daisyui";
import { Await, Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false); // state for success message

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(result.user, name, photoUrl);
        setIsRegistered(true); // set isRegistered to true if registration is successful
      })
      .catch((err) => {
        console.error(err);
      });

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
    // Display errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

  };

  // Redirect to login form after registration
  if (isRegistered) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 ">
        <div className="bg-fuchsia-200 p-6 rounded-lg shadow-lg md:w-1/2 text-center">
          <h2 className="text-lg font-semibold mb-4">Registration successful!</h2>
          <Link
            className="text-red-500 hover:underline font-bold"
            to="/login"
          >
            Click here to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-fuchsia-200 p-6 rounded-lg shadow-lg md:w-1/2">
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
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
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
              name="photoURL"
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
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
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
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
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
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
                className="text-red-500 hover:underline font-bold"
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
