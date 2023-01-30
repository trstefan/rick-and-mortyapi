import React from "react";
import Status from "./Category/Status";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
const Filter = ({ setStatus, setGender, setSpecies, setPage }) => {
  function clear() {
    setPage(1);
    setStatus("");
    window.location.reload(false);
    //console.log("work");
  }
  return (
    <div>
      Hello from Filter Component
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={clear}
        >
          Clear Filters
        </button>
      </div>
      <div>
        <Status setStatus={setStatus} setPage={setPage}></Status>
        <Gender setGender={setGender} setPage={setPage}></Gender>
        <Species setSpecies={setSpecies} setPage={setPage}></Species>
      </div>
    </div>
  );
};

export default Filter;
