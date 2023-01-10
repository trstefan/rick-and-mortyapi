import "./App.css";
import { useEffect, useState } from "react";
import CharsGrid from "./components/CharsGrid";

function App() {
  const [chars, setChars] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function getData() {
      await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => response.json())
        .then((json) => {
          setChars(json.results);
        });
    })();
  }, [page]);

  console.log(page);

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
      <CharsGrid chars={chars}></CharsGrid>
      <div className="my-5">
        <button
          className="bg-blue-500 disabled hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4 "
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          PREVIOUS PAGE
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextPage}
        >
          NEXT PAGE
        </button>
      </div>
    </div>
  );
}

export default App;
