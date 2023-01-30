import React from "react";
import FilterButton from "../FilterButton";

const Gender = ({ setGender, setPage }) => {
  let genders = ["Female", "Male", "Enderless", "Unknown"];
  return (
    <div>
      {genders.map((item, index) => (
        <FilterButton
          className="g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          key={index}
          index={index}
          name="gender"
          input={item}
          task={setGender}
          setPage={setPage}
        ></FilterButton>
      ))}
    </div>
  );
};

export default Gender;
