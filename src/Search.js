import React, { useState, useEffect } from "react";
import PokemonListItem from "./PokemonListItem";

export default function Search({ pokemon }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchTerm === ""
      ? setSearchResults([])
      : setSearchResults(
          pokemon
            .filter((pokemon) => pokemon.includes(searchTerm))
            .map((p) => p)
        );
  }, [searchTerm, pokemon]);

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="searchResults">
        {searchResults.map((item) => (
          <PokemonListItem pokemon={item} />
        ))}
      </div>
    </>
  );
}
