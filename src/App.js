import React, { useState, useEffect } from 'react';
import PokemonList from "./PokemonList"
import axios from "axios"
import Pagination from './Pagination'
import Search from './Search'
function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl ] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  //convert to search 
  // send pokemon as a prop



  useEffect(() => {
      setLoading(true)
      let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
        }).catch(console.error());
    return () => cancel()

  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

    // maybe create another searchTerm so that when that state changes we can loop thru all pokemon 
    // this useEffect would be quite different because im going to filter thru more specifications 
    // alternative create a boolean that would tell useEffect if the searchterm is being called from the main search page or not


  return (
    <>
    <h1>PokeApi</h1>
   
    <Search pokemon={pokemon} />
   
    <PokemonList pokemon={pokemon}/>

   <Pagination 
    gotoNextPage = {nextPageUrl ? gotoNextPage : null }
    gotoPrevPage = {prevPageUrl ? gotoPrevPage : null }
   />
   </>
  );
}
  
export default App;
