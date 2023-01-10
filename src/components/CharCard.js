import React from "react";

const CharCard = ({ char }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={char.image} alt="" />

      <div className="px-6 py-4">
        {" "}
        <div className="font-bold text-xl mb-2 text-red-600">{char.name}</div>
        <p className="text-gray-700 text-base">
          {char.status} - {char.species}
        </p>
        <p className="font-bold">Origin: </p>
        <p className="text-gray-700 text-base">{char.origin.name}</p>
        <p className="font-bold">Last known location: </p>
        <p className="text-gray-700 text-base">{char.location.name}</p>
      </div>
    </div>
  );
};

export default CharCard;
