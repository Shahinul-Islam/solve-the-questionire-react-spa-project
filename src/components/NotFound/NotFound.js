import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-purple-600 text-center font-medium text-white w-full h-3/4 py-72">
      <h3> 404 not found</h3>
      <h3>The page you are looking for does not exist</h3>
      <h3 className="py-2 text-2xl">
        Please visit
        <br></br>
        <Link to="/" className="text-blue-400">
          Home
        </Link>
      </h3>
    </div>
  );
};

export default NotFound;
