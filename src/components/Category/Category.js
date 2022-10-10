import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = ({ questionSet }) => {
  console.log(questionSet);
  const { id, logo, name, total } = questionSet;
  return (
    <div className="flex flex-col m-4 border-2 p-6 rounded-md text-yellow-100 bg-sky-600">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="mt-4">
        <h3>Name: {name}</h3>
        <p>Total Questions: {total}</p>
      </div>
    </div>
  );
};

export default Category;
