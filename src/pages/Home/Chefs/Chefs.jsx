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
    <div className="w-full sm:w-1/2 md:w-1/3 p-2">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={chef_picture}
            alt="Chef"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {chef_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Likes: {likes}</p>
          <p>Recipes: {number_of_recipes}</p>
          <p>Experience: {years_of_experience} years</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
