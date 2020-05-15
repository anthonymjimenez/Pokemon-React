import React from 'react';

import { NavLink } from 'react-router-dom';

const PokemonListItem = ({ pokemon }) => {
  return (
    <article className="pokemonListItem">
      <NavLink className="pokemonListItemLink" to={`/characters/${pokemon}`}>
        <p>{pokemon}</p>
      </NavLink>
    </article>
  );
};

export default PokemonListItem;
