import React from "react";

export default function SearchForm({ setSearchParameters }) {
  return (
    <div className="searchForm">
      <label>View By: </label>
      <select
        className="select"
        onChange={(event) => {
          event.target.value === "allPokemon"
            ? setSearchParameters(900)
            : setSearchParameters(25);
          if (event.target.value === "1stGenPokemon") {
            setSearchParameters(151);
          }
        }}
      >
        <option name="Search current page" value="currentPokemon">
          Current Page
        </option>
        <option name="Search current page" value="1stGenPokemon">
          First Generation Pokemon
        </option>
        <option name="Search all Pokemon" value="allPokemon">
          All Pokemon
        </option>
      </select>
    </div>
  );
}
