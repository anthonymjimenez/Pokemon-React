import React from "react";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemonList">
      {pokemon.map((pokemon) => (
        <PokemonListItem pokemon={pokemon}></PokemonListItem>
      ))}
    </div>
  );
};
export default PokemonList;
