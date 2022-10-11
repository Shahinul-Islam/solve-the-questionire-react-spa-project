import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = ({ questionSet, questionSetHandler }) => {
  const { id, logo, name, total } = questionSet;
  return (
    <div className="flex flex-col m-4 border-2 p-6 rounded-md text-yellow-100 bg-sky-600">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3>Name: {name}</h3>
          <p>Questions: {total}</p>
        </div>
        <div>
          <button
            onClick={() => questionSetHandler(id)}
            className="bg-white p-1 text-black rounded-md"
          >
            Go to Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
