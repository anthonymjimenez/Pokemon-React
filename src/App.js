import React, { useState, useEffect } from 'react';
import PokemonList from "./PokemonList"
import axios from "axios"
import Pagination from './Pagination'
import Search from './Search'
import PokemonView from './PokemonView'
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [allPokemon, setAllPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=25")
  const [nextPageUrl, setNextPageUrl ] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
 
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

  useEffect(() => {
      setLoading(true)
      let cancel
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=900', {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
      setLoading(false)
      setAllPokemon(res.data.results.map(p => p.name))
        }).catch(console.error());
    return () => cancel()
  },[])

  const gotoNextPage = () => setCurrentPageUrl(nextPageUrl)
  const gotoPrevPage = () => setCurrentPageUrl(prevPageUrl)

  if(loading) return 'loading...'
  
  return (
    <div className ='layout'>
    <h1 className='header'>PokeApi</h1>
   
    <Search pokemon={pokemon} allPokemon = {allPokemon}/>
   
    <PokemonList pokemon={pokemon}/>

   <Pagination 
    gotoNextPage = {nextPageUrl ? gotoNextPage : null }
    gotoPrevPage = {prevPageUrl ? gotoPrevPage : null }
   />

   <Route path="/characters/:id" component={PokemonView} />

   </div>
  );
}
  
export default App;
