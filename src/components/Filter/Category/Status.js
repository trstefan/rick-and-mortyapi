import React from "react";
import FilterButton from "../FilterButton";

const Status = ({ setStatus, setPage }) => {
  let status = ["Alive", "Dead", "Unknow"];
  return (
    <div className="bg-blue-700  mt-4 py-2 px-1 rounded-lg">
      <p className="font-bold"> Status</p>
      {status.map((item, index) => (
        <FilterButton
          className="g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          key={index}
          index={index}
          name="status"
          input={item}
          task={setStatus}
          setPage={setPage}
        ></FilterButton>
      ))}
    </div>
  );
};

export default Status;
