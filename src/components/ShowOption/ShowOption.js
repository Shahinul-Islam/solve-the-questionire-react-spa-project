import React from "react";

const ShowOption = ({ option, question }) => {
  // console.log(question);
  return (
    <div className="p-2">
      <form>
        <input
          type="radio"
          className="mx-2"
          name="option"
          value={question.correctAnswer}
        />
        {option}
      </form>
    </div>
  );
};

export default ShowOption;
