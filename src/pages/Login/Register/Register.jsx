import React, { useContext, useState } from "react";
import { Input, Button } from "react-daisyui";
import { Await, Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log(name, email, password, photoUrl)

    createUser( email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(err => {
        console.error(err);
    })

    try {
        // Create user
        const result = await createUser(email, password);
        const createdUser = result.user;
  
        // Update user profile
        await updateUserData(createdUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        
        console.log("Registration successful!");
      } catch (error) {
        console.error(error);
      }

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
