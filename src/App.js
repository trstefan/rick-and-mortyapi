import "./App.css";
import { useEffect, useState } from "react";
import CharsGrid from "./components/CharsGrid";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter/Filter";

function App() {
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const [searchChar, setSearchChar] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${searchChar}&status=${status}&gender=${gender}&species=${species}`
      )
      .then((response) => {
        const chars = response.data.results;
        const info = response.data.info;
        setChars(chars);
        //console.log(info.prev);

        info.prev === null
          ? (document.getElementById("btnPrev").style.display = "none")
          : (document.getElementById("btnPrev").style.display = "block");

        info.next === null
          ? (document.getElementById("btnNext").style.display = "none")
          : (document.getElementById("btnNext").style.display = "block");
      });
  }, [page, searchChar, status, gender, species]);

  function handleNextPage() {
    const currentPage = page + 1;
    setPage(currentPage);
  }

  function handlePreviousPage() {
    const currentPage = page - 1;
    setPage(currentPage);
    //console.log("works");
  }

  return (
    <div className="App">
      <h1>The Rick and Morty API</h1>
      <SearchBar setSearchChar={setSearchChar} setPage={setPage} />
      <div className="flex flex-row gap-x-8 justify-center items-start">
        <Filter
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPage={setPage}
        ></Filter>
        <CharsGrid chars={chars}></CharsGrid>
      </div>

      <div className="my-5 flex">
        <button
          className="bg-blue-500 disabled hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 "
          onClick={handlePreviousPage}
          id="btnPrev"
        >
          PREVIOUS PAGE
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextPage}
          id="btnNext"
        >
          NEXT PAGE
        </button>
      </div>
    </div>
  );
}

export default App;
