import React, { useState } from "react";
import { Document, Page, Text, PDFViewer } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const Blog = () => {
  const [loaded, setLoader] = useState(false)

  const downloadPDF = () => {
    
  }
 

  return (
    <div>
      <div className="sm:w-full md:w-10/12 lg:w-9/12 mx-auto mb-12">
          <button onClick={downloadPDF} disabled={!loaded === false} className="btn">
            {loaded?(
              <span>Downloading</span>
            ):(Downloaded)}
          </button>

      <h1 className="text-5xl font-semibold m-10 text-center sm:text-left">

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
                <span className=" bg-purple-400 rounded-lg p-1"> 1.</span> Tell us
                the differences between uncontrolled and controlled components.
              </h2>
              <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div className="collapse-content">
              <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span className=""></span>
                In React, a controlled component is a component that manages its
                state through props, while an uncontrolled component manages its
                own state using refs or a DOM API. Controlled components offer
                more control and are easier to test, while uncontrolled
                components can provide a simpler and faster development
                experience.
              </p>
            </div>
          </div>
          <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex gap-5">
              <h2 className="text-2xl text-black">
                <span className=" bg-purple-400 rounded-lg p-1"> 2.</span> How to
                validate React props using PropTypes?
              </h2>
              <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div className="collapse-content">
              <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                <span className=""></span>To validate React props using PropTypes,
                you import the PropTypes package and define the expected type
                and shape of the props in the component's propTypes object.
              </p>
            </div>
          </div>
          <div className="collapse mb-4 mx-auto card w-full sm:w-11/12 md:w-5/12 lg:w-5/12 bg-base-100 shadow-xl">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex gap-5">
              <h2 className="text-2xl text-black">
                <span className=" bg-purple-400 rounded-lg p-1"> 3.</span> Tell us
                the difference between nodejs and express js.
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
                <span className=" bg-purple-400 rounded-lg p-1"> 4.</span> What is a
                custom hook, and why will you create a custom hook?
              </h2>
              <span className="bg-green-700 rounded-lg  p-2">&#8595;</span>
            </div>
            <div className="collapse-content">
              <p className="ml-16 text-md bg-green-700 rounded-lg p-8 text-white font-semibold secondary">
                <span className="text-xl font-bold italic bg-yellow-400 p-1 rounded-lg">
                  Ans:
                </span>
                A custom hook is a reusable function in React that encapsulates
                specific logic. You create a custom hook to avoid code
                duplication and make code more reusable and maintainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
