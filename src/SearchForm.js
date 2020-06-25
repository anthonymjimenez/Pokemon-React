import React from "react";

export default function SearchForm({ setSearchParameters }) {
  return (
    <div className="searchForm">
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
          View Current Page
        </option>
        <option name="Search current page" value="1stGenPokemon">
          View First Generation Pokemon
        </option>
        <option name="Search all Pokemon" value="allPokemon">
          View All Pokemon
        </option>
      </select>
    </div>
  );
}
