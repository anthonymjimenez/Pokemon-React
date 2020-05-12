import React from 'react'
import PokemonListItem from './PokemonListItem'

const PokemonList = ({ pokemon }) => {
    return (
        <div>
            {pokemon.map(pokemon => (
               <PokemonListItem key = {pokemon.id} pokemon={pokemon}></PokemonListItem>
            ))}
        </div>
    )
}
export default PokemonList;