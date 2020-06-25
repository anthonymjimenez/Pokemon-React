import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";
import Search from "./Search";
import PokemonView from "./PokemonView";
import { Route } from "react-router-dom";
import "./App.css";
import SortBy from "./SortBy";
import SearchForm from "./SearchForm";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchParameters, setSearchParameters] = useState(25);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      if (searchParameters !== 25) {
        setCurrentPageUrl("https://pokeapi.co/api/v2/pokemon/");
      }
      var results = await axios.get(
        currentPageUrl + "?limit=" + searchParameters
      );
      setNextPageUrl(results.data.next);
      setPrevPageUrl(results.data.previous);

      var array = [];

      await Promise.all(
        results.data.results.map(async (p) => {
          var pokeData = await axios.get(p.url);
          array.push(pokeData.data);
        })
      );
      setPokemon([...array].sort((a, b) => (a.order > b.order ? 1 : -1)));

      setLoading(false);
    }
    fetch();
  }, [currentPageUrl, searchParameters]);

  const gotoNextPage = () => setCurrentPageUrl(nextPageUrl);
  const gotoPrevPage = () => setCurrentPageUrl(prevPageUrl);

  return (
    <div className="layout">
      <h1 className="header">PokeApi</h1>
      <SearchForm setSearchParameters={setSearchParameters} />
      {!loading ? (
        <>
          <SortBy pokemon={pokemon} setPokemon={setPokemon} />
          <Search
            pokemon={pokemon.map(({ name }) => name)}
            setPokemon={setPokemon}
          />
          <PokemonList pokemon={pokemon.map(({ name }) => name)} />
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Route path="/characters/:id" component={PokemonView} />
    </div>
  );
}

export default App;
