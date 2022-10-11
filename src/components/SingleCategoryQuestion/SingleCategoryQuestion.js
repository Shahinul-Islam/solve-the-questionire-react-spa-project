import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

const SingleCategoryQuestion = () => {
  const singleCategory = useLoaderData();
  const { questions, name, id } = singleCategory.data;
  return (
    <div>
      <h2>Topic Name: {name}</h2>
      <h2>Total questions: {questions.length}</h2>
      {questions.map((question) => (
        <SingleQuestion key={id} questions={questions}></SingleQuestion>
      ))}
    </div>
  );
};

export default SingleCategoryQuestion;
