import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowAltCircleLeft, FaBeer } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    bio,
    recipes,
  } = useLoaderData();
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(true);
    toast.success("Recipe added to favorites!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="container mx-auto py-28">
      <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-10 ml-32 ">
        <div className="md:col-span-1">
          <LazyLoad
            height={300}
            offset={100}
            threshold={1}
            placeholder={<div>Loading...</div>}
          >
            <img
              src={chef_picture}
              alt={chef_name}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </LazyLoad>

          <h2 className="text-3xl text-red-500 font-bold my-5 text-center">
            {chef_name}
          </h2>
          <p className="text-gray-500 text-lg mt-2">{bio}</p>
          <div className="flex items-center mt-5">
            <span className="text-lg font-bold">
              {years_of_experience} years of experience
            </span>
            <span className="mx-3 text-gray-400">|</span>
            <span className="text-lg font-bold">
              {number_of_recipes} recipes
            </span>
            <span className="mx-3 text-gray-400">|</span>
            <span className="text-lg font-bold">{likes} likes</span>
          </div>
          <Link to="/">
            <button className="flex items-center gap-4 bg-red-400 hover:bg-red-700 duration-700 text-white font-bold px-3 py-1 rounded-md mt-12">
              <FaArrowAltCircleLeft className="bg-blue-500 rounded-full" /> Back
              to Home
            </button>
          </Link>
        </div>
        <div className="md:col-span-2">
          {recipes &&
            recipes?.map((recipe, index) => (
              <div
                key={index}
                className=" bg-red-100 hover:bg-red-200 duration-1000 rounded-lg shadow-md p-5 mt-5 w-5/6"
              >
                <h3 className="text-xl font-bold mb-3">{recipe.recipe_name}</h3>
                <p className="text-gray-500 mb-3">
                  <span className="font-bold text-sm">Ingredients : </span>
                  {recipe.ingredients.join(", ")}
                </p>
                <p className="mb-3"><span className="font-bold text-sm text-gray-500">Recipe Method : </span> {recipe.cooking_method}</p>
                <div className="flex items-center gap-2">
                  <Rating
                    style={{ maxWidth: 110 }}
                    value={recipe?.rating}
                    readOnly
                  />
                  <span className="text-lg font-bold">{recipe.rating}</span>
                  <span className="text-gray-500"> ratings</span>
                </div>
                <button
                  className={`bg-red-400 hover:bg-red-700 duration-700 text-white font-bold px-3 py-1 rounded-md mt-3 ${
                    favorite ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleFavorite}
                  disabled={favorite}
                >
                  Favorite
                </button>
              </div>
            ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeDetails;
