import React from "react";
import FilterButton from "../FilterButton";

const Gender = ({ setGender, setPage }) => {
  let genders = ["Female", "Male", "Enderless", "Unknown"];
  return (
    <div className="bg-red-700  mt-4 py-2 px-1 rounded-lg">
      <p className="font-bold"> Gender</p>
      {genders.map((item, index) => (
        <FilterButton
          className="g-blue-500 hover:bg-lime-700	 text-white font-bold py-2 px-4 rounded"
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
