import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Qusetionire = () => {
  return (
    <div>
      <h1 className="text-2xl">
        {" "}
        Please visit{" "}
        <Link to="/" className="text-blue-700">
          Home
        </Link>{" "}
        and choose a category to see all the questions
      </h1>
    </div>
  );
};

export default Qusetionire;
