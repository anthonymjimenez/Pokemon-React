import React, { useState, useEffect } from 'react';
import PokemonListItem from './PokemonListItem'

export default function Search({pokemon, allPokemon}) {
  
    
 const [searchResults, setSearchResults] = useState([]);
 const [searchParameters, setSearchParameters] = useState("")
 const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  (searchTerm === "") ?
  setSearchResults([]) :
  (searchParameters === 'allPokemon') ? 
    setSearchResults(
    allPokemon.filter(pokemon => pokemon.toLowerCase().includes(searchTerm))
      .map(p => p))
    : 
    setSearchResults(
    pokemon.filter(pokemon => pokemon.toLowerCase().includes(searchTerm))
        .map(p => p))
  }, [searchTerm, pokemon]);

const handleTextChange = event => setSearchTerm(event.target.value)
const handleSelectChange = event => setSearchParameters(event.target.value)

  return (
    <>
    <div className = 'searchForm'>
    <select className = 'select' onChange={handleSelectChange}>
    <option
        name="Search current page"
        value="currentPokemon"
         >
        Search Current Page
      </option>
      <option
        name="Search all Pokemon"
        value="allPokemon"
      >
      Search All Pokemon
      </option>
      </select>

        <div>
            <input 
            className = 'search'
            type = "text"
            placeholder = "Search"
            value = {searchTerm}
            onChange = {handleTextChange}
            />
            {searchResults.map(item => (
            <PokemonListItem pokemon={item}/>
            ))
            }
       
        </div>
        </div>
    </>
    )
}
