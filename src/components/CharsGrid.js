import React from "react";
import CharCard from "./CharCard";

const CharsGrid = ({ chars }) => {
  // console.log(chars);
  return (
    <section className="chars-grid">
      {chars.map((char) => (
        <CharCard key={char.id} char={char}></CharCard>
      ))}
    </section>
  );
};

export default CharsGrid;
