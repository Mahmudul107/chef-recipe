import React, { useEffect, useState } from "react";

const Chefs = ({ chef }) => {
  const {
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
  } = chef;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={chef.chef_picture} alt={chef.chef_name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{chef.chef_name}</div>
        <p className="text-gray-700 text-base mb-2">
          Years of experience: {chef.years_of_experience}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Number of recipes: {chef.number_of_recipes}
        </p>
        <p className="text-gray-700 text-base mb-2">Likes: {chef.likes}</p>
        <div className="flex justify-center">
          <button className="bg-red-400 hover:bg-red-700 duration-700 text-white font-bold py-2 px-4 rounded-full">
            View Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
