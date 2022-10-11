import React from "react";

const ShowOption = ({ option }) => {
  return (
    <div className="p-2">
      <div>
        <input type="radio" className="mx-2" name="option" value={option} />
        {option}
      </div>
    </div>
  );
};

export default ShowOption;
