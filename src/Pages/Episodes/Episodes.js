import React, { useEffect, useState } from "react";
import CharsGrid from "../../components/CharsGrid";
import InputGroup from "../../components/Filter/Category/InputGroup";

export const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      //console.log(data);

      let mappedChars = await Promise.all(
        data.characters.map((mappedChar) => {
          return fetch(mappedChar).then((res) => res.json());
        })
      );
      setResults(mappedChars);
      //console.log(mappedChars);
    })();
  }, [api]);
  return (
    <div className="flex flex-col">
      <div className="text-center my-6">
        <h1>{info.name}</h1>
        <h3 className="font-medium">
          {info.episode} - {info.air_date}
        </h3>
      </div>
      <div className="grid gap-[1rem] sm:grid-cols-[.5fr_1.5fr]">
        <InputGroup name="Episode" changeID={setID} total={51} />
        <CharsGrid chars={results}></CharsGrid>
      </div>
    </div>
  );
};
