import React from "react";

const Options = ({ question }) => {
  //   console.log(question);
  let str = question.question;
  const questionWthoutSpace = str.replace(/<[^>]*>?/gm, "");
  const questionWithSpace = questionWthoutSpace.replace(/\&nbsp;/g, "");

  return (
    <div>
      <h2 className="font-bold p-3">{questionWithSpace}</h2>
    </div>
  );
};

export default Options;
