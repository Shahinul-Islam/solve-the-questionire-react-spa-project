import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowOption = ({ option, question }) => {
  const checkTheOption = (option) => {
    // console.log(option, " is clicked");
    if (option !== question.correctAnswer) {
      return toast(`The correct answer is : ${question.correctAnswer}`);
    }
    return toast("Your Answer is correct");
  };
  // console.log(question);
  return (
    <div>
      <input
        type="radio"
        className="mx-2"
        name="option"
        value={question.correctAnswer}
        onClick={() => checkTheOption(option)}
      />
      {option}
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
  );
};

export default ShowOption;
