import React from "react";
import ShowOption from "../ShowOption/ShowOption";

const Options = ({ question }) => {
  console.log(question);
  let str = question.question;
  const questionWthoutSpace = str.replace(/<[^>]*>?/gm, "");
  const questionWithSpace = questionWthoutSpace.replace(/\&nbsp;/g, "");

  return (
    <div>
      <h2 className="font-bold p-3">{questionWithSpace}</h2>
      <p>ID: {question.id}</p>
      <p>Correct Ans: {question.correctAnswer}</p>
      <div className="grid grid-cols-2 p-2">
        {question.options.map((option) => (
          <ShowOption option={option}></ShowOption>
        ))}
      </div>
    </div>
  );
};

export default Options;
