import React from "react";
import Options from "../Options/Options";

const SingleQuestion = ({ questions }) => {
  return (
    <div>
      <h2>This is single Question:{questions.length}</h2>
      {questions.map((question) => (
        <Options key={question.id} question={question}></Options>
      ))}
    </div>
  );
};

export default SingleQuestion;
