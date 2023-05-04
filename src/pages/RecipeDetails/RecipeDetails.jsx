import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const RecipeDetails = () => {
  const { id } = useParams();
//   const [rating, setRating] = useState(0) // Initial value
  const { chef_picture, chef_name, years_of_experience, number_of_recipes, likes, bio, recipes } = useLoaderData();

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <img src={chef_picture} alt={chef_name} className="rounded-lg shadow-md w-full h-auto" />
          <h2 className="text-2xl font-bold mt-5">{chef_name}</h2>
          <p className="text-gray-500 text-lg mt-2">{bio}</p>
          <div className="flex items-center mt-5">
            <span className="text-lg font-bold">{years_of_experience} years of experience</span>
            <span className="mx-3 text-gray-400">|</span>
            <span className="text-lg font-bold">{number_of_recipes} recipes</span>
            <span className="mx-3 text-gray-400">|</span>
            <span className="text-lg font-bold">{likes} likes</span>
          </div>
        </div>
        <div className="md:col-span-2">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5 mt-5">
              <h3 className="text-xl font-bold mb-3">{recipe.recipe_name}</h3>
              <p className="text-gray-500 mb-3">{recipe.ingredients.join(', ')}</p>
              <p className="mb-3">{recipe.cooking_method}</p>
              <div className="flex items-center gap-2">
                <Rating style={{ maxWidth: 110 }} value={(recipe?.rating)} readOnly/>
                <span className="text-lg font-bold">{recipe.rating}</span>
                <span className="text-gray-500"> ratings</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
