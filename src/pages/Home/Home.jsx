import React, { useEffect, useState } from "react";
import bg from "../.././assets/foodbg.jpg";
import Chefs from "./Chefs/Chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefsData")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  console.log(chefs);

  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="relative z-10 flex items-center justify-end min-h-screen px-4 sm:px-8 lg:px-16">
          <div className="text-white text-right max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-sans font-semibold mb-6 text-red-500 animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-red-200 to-red-600">
              Japanese Food
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-serif">
              Discover the secrets of Japanese metro food and learn how to make
              delicious recipes at home.
            </p>
            <button className="btn btn-error mt-8 text-white hover:bg-red-600 duration-700 animate-bounce">
              Explore Food
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {chefs.map((chef) => (
          <Chefs key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Home;
