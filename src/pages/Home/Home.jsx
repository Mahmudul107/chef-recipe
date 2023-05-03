import React from "react";
import bg from "../.././assets/foodbg.jpg";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="relative z-10 flex items-center justify-end h-screen px-8">
          <div className="text-white text-right w-1/3">
            <h1 className="text-7xl font-sans font-semibold mb-6 text-red-500 animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-red-200 to-red-600">
              Japanese Food
            </h1>
            <p className="text-xl font-serif">
              Discover the secrets of Japanese metro food and learn how to make
              delicious recipes at home.
            </p>
            <button className="btn btn-error mt-8 text-white hover:bg-red-600 duration-700 animate-bounce">Explore Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
