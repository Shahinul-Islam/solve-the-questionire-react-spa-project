import React from "react";
import { useLoaderData } from "react-router-dom";
import Options from "../Options/Options";

const SingleQuestion = () => {
  const singleCategory = useLoaderData();
  const { questions, name } = singleCategory.data;
  return (
    <div>
      <h2>Topic: {name}</h2>
      <h2>Total Questions:{questions.length}</h2>
      {questions.map((question) => (
        <Options key={question.id} question={question}></Options>
      ))}
    </div>
  );
};

export default SingleQuestion;
