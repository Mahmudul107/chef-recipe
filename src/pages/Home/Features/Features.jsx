import React from "react";

const JapaneseFoodCard = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold font-serif mb-16 text-transparent bg-gradient-to-r from-purple-400 to-red-700 bg-clip-text">
        Our Foodsome Blog 
      </h1>
      <div className="max-w-md mx-auto mb-12 hover:bg-red-200 duration-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Japanese food"
            />
          </div>
          <div className="p-8">
            <div className="tracking-wide text-3xl text-gray-600 font-bold">
              Sushi Rolls With Bread Beans
            </div>
            <p className="mt-2 text-gray-500">
              Discover the most delicious Japanese dishes that you must try when
              visiting Japan.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto mb-12 hover:bg-red-200 duration-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Japanese food"
            />
          </div>
          <div className="p-8">
            <div className="tracking-wide text-3xl text-gray-600 font-bold">
              Ramen With Mutton Curry & Salad
            </div>
            <p className="mt-2 text-gray-500">
              Discover the most delicious Japanese dishes that you must try when
              visiting Japan.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto mb-12 hover:bg-red-200 duration-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://images.unsplash.com/photo-1629684782790-385ed5adb497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Japanese food"
            />
          </div>
          <div className="p-8">
            <div className="tracking-wide text-3xl text-gray-600 font-bold">
            Sukiyaki
            </div>
            <p className="mt-2 text-gray-500">
              Discover the most delicious Japanese dishes that you must try when
              visiting Japan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapaneseFoodCard;
