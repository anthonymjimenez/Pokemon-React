import React from "react";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemon, searchResults }) => {
  return (
    <div className="pokemonList">
      {pokemon.map((pokemon) => (
        <PokemonListItem pokemon={pokemon}></PokemonListItem>
      ))}
    </div>
  );
};
export default PokemonList;
