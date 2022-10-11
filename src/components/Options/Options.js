import React, { useState } from "react";
import ShowOption from "../ShowOption/ShowOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Options = ({ question }) => {
  //   const shouldAddEventHandler = true;
  //   console.log(question);
  //   const [showModal, setShowModal] = useState(false);
  let str = question.question;
  const questionWthoutSpace = str.replace(/<[^>]*>?/gm, "");
  const questionWithSpace = questionWthoutSpace.replace(/\&nbsp;/g, "");
  const showAnswer = () => {
    alert(question.correctAnswer);
    // return <div>{question.correctAnswer}</div>;
  };

  return (
    <div className="bg-slate-400 m-2 rounded-md">
      <div className="text-right">
        <FontAwesomeIcon
          icon={faEye}
          className="mr-2 mt-2"
          onClick={showAnswer}
        />
      </div>
      <h2 className="font-bold p-3">{questionWithSpace}</h2>
      <p>ID: {question.id}</p>
      {/* <p>Correct Ans: {rightAns}</p> */}
      <div className="grid text-left md:text-center md:grid-cols-2 p-2">
        {question.options.map((option) => (
          <ShowOption option={option}></ShowOption>
        ))}
      </div>
    </div>
  );
};

export default Options;
