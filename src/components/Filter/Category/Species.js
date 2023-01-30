import React from "react";
import FilterButton from "../FilterButton";

const Species = ({ setSpecies, setPage }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];
  return (
    <div>
      {" "}
      {species.map((item, index) => (
        <FilterButton
          className="g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          key={index}
          index={index}
          name="species"
          input={item}
          task={setSpecies}
          setPage={setPage}
        ></FilterButton>
      ))}
    </div>
  );
};

export default Species;
