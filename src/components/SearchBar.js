import React from "react";

const SearchBar = ({ setSearchChar, setPage }) => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search for characters"
          onChange={(e) => {
            setPage(1);
            setSearchChar(e.target.value);
            console.log(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
