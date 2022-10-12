import React from "react";
import ShowOption from "../ShowOption/ShowOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Options = ({ question }) => {
  let str = question.question;
  const questionWthoutSpace = str.replace(/<[^>]*>?/gm, "");
  const questionWithSpace = questionWthoutSpace.replace(/\&nbsp;/g, "");
  const notify = () => {
    toast(question.correctAnswer);
  };

  return (
    <div className="bg-slate-400 m-2 rounded-md">
      <div className="text-right">
        <FontAwesomeIcon icon={faEye} className="mr-2 mt-2" onClick={notify} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <h2 className="font-bold p-3">{questionWithSpace}</h2>
      <form className="grid text-left md:text-center md:grid-cols-2 p-2">
        {question.options.map((option) => (
          <ShowOption
            key={question.id}
            option={option}
            question={question}
          ></ShowOption>
        ))}
      </form>
    </div>
  );
};

export default Options;
