import React from "react";
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="bg-gray-200">
      <Pdf targetRef={ref} filename="Blog-page.pdf">
        {({ toPdf }) => (
          <div className="flex justify-end mt-6 mr-6">
            <button className="flex items-center gap-2 bg-red-400 hover:bg-red-700 duration-700 text-white font-bold py-2 px-4 rounded-full" onClick={toPdf}>
            DownLoad Pdf <FaDownload/>
          </button>
          </div>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="sm:w-full md:w-10/12 lg:w-9/12 mx-auto mb-12">
          <h1 className="text-4xl font-semibold m-10 text-center">
            This is Blog page QnA section
          </h1>
          <div className="mb-12 w-9/12 mx-auto">
            <hr />
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium flex gap-5">
                <h2 className="text-2xl text-black">
                  <span className=" bg-purple-400 rounded-lg p-1"> 1.</span>{" "}
                  Tell us the differences between uncontrolled and controlled
                  components.
                </h2>
                <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
              </div>
              <div className="collapse-content">
                <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                  <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                    Ans:
                  </span>
                  <span className=""></span>
                  In React, a controlled component is a component that manages
                  its state through props, while an uncontrolled component
                  manages its own state using refs or a DOM API. Controlled
                  components offer more control and are easier to test, while
                  uncontrolled components can provide a simpler and faster
                  development experience.
                </p>
              </div>
            </div>
            <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium flex gap-5">
                <h2 className="text-2xl text-black">
                  <span className=" bg-purple-400 rounded-lg p-1"> 2.</span> How
                  to validate React props using PropTypes?
                </h2>
                <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
              </div>
              <div className="collapse-content">
                <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                  <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                    Ans:
                  </span>
                  <span className=""></span>To validate React props using
                  PropTypes, you import the PropTypes package and define the
                  expected type and shape of the props in the component's
                  propTypes object.
                </p>
              </div>
            </div>
            <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium flex gap-5">
                <h2 className="text-2xl text-black">
                  <span className=" bg-purple-400 rounded-lg p-1"> 3.</span>{" "}
                  Tell us the difference between nodejs and express js.
                </h2>
                <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
              </div>
              <div className="collapse-content">
                <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                  <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                    Ans:
                  </span>
                  <span className=""></span>
                  Node.js is a runtime environment for executing JavaScript code
                  outside of a web browser, while Express.js is a web framework
                  built on top of Node.js that provides a set of features and
                  tools for building web applications and APIs.
                </p>
              </div>
            </div>
            <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium flex gap-5">
                <h2 className="text-2xl text-black">
                  <span className=" bg-purple-400 rounded-lg p-1"> 4.</span>{" "}
                  What is a custom hook, and why will you create a custom hook?
                </h2>
                <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
              </div>
              <div className="collapse-content">
                <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                  <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                    Ans:
                  </span>
                  A custom hook is a reusable function in React that
                  encapsulates specific logic. You create a custom hook to avoid
                  code duplication and make code more reusable and maintainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
