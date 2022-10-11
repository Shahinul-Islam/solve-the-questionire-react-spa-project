import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCategoryQuestion = () => {
  const singleCategory = useLoaderData();
  const { questions } = singleCategory.data;
  return (
    <div>
      <h2>
        Thsis is single category question. total questions: {questions.length}
      </h2>
    </div>
  );
};

export default SingleCategoryQuestion;
