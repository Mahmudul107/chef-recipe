import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <h1 className="text-5xl text-center font-bold mb-16 text-transparent bg-gradient-to-r from-purple-400 to-red-700 bg-clip-text">
        What Peoples Say About Us
      </h1>
      <div className="carousel relative w-full">
        <div id="item1" className="flex justify-center carousel-item w-full">
          <div className="relative rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="w-full h-full"
            />
            <div className="flex flex-col justify-center items-center  absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 hover:opacity-60">
              <p className="text-white font-bold text-3xl text-center">
                Ian Dooley
              </p>
              <p className="text-gray-300 text-lg text-center">
                "Amazing recipes and cooking tips! Easy to navigate and
                beautiful photos. Can't wait to try more!"
              </p>
            </div>
          </div>
        </div>
        <div id="item2" className="flex justify-center carousel-item w-full">
          <div className="relative rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="w-full h-full"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 hover:opacity-60">
              <p className="text-white font-bold text-3xl text-center">
                Jurica Koletić
              </p>
              <p className="text-gray-300 text-lg text-center">
                "Exciting food experiences. User-friendly site. Great recipes!"
              </p>
            </div>
          </div>
        </div>
        <div id="item3" className="flex justify-center carousel-item w-full">
          <div className="relative rounded-full overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1675034391165-b66aff9346d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 hover:opacity-60">
              <p className="text-white font-bold text-3xl text-center">
                Fellipe Ditadi
              </p>
              <p className="text-gray-300 text-lg text-center">
                "Found my new go-to for cooking inspiration. Excellent website
                with delicious recipes and helpful tips."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
