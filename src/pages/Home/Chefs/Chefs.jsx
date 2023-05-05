import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { FaBeer, FaThumbsUp } from "react-icons/fa";

const Chefs = ({ chef }) => {
  const {
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
    id
  } = chef;
  // console.log(chef);

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-gray-200 hover:bg-red-200 duration-500">
      <LazyLoad height={230} offset={100} threshold={1} placeholder={<div>Loading...</div>}>
        <img className="w-full" src={chef_picture} alt={chef_name} onError={(e) => e.target.src = 'default-image.jpg'} />
      </LazyLoad>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{chef_name}</div>
        <p className="text-gray-700 text-base mb-2">
          Years of experience: {years_of_experience}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Number of recipes: {number_of_recipes}
        </p>
        <p className="flex items-center gap-2 text-gray-700 text-base mb-2"> <FaThumbsUp className=" text-blue-600"/>   {likes}</p>
        <div className="flex justify-center">
          <Link to={'/recipeDetails/'+id}>
            <button className="bg-red-400 hover:bg-red-700 duration-700 text-white font-bold py-2 px-4 rounded-full">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
