import React, { useEffect, useState } from 'react';

const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState({});
  const [characterID, setID] = useState(null)
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
      .then(response => response.json())
      .then(response => {setCharacter(response)
                         setID(response.id)
                        })
    
  }, [match.params.id]);

const arrayCheck = (arg) => { return (Array.isArray(arg)) ? (arg) : [] }

  return (
    <>
    <section className="pokemonView">
      <h2>{character.name}</h2>
      <ul className="pokemonDetails">
    <li>
        <strong>Type: </strong> 
        {arrayCheck(character.types).map(({type}) => <p>{type.name}</p>)} 
    </li>
    <li>
          <strong>Height</strong>: {character.height}
    </li>
    <li>
          <strong>Weight</strong>: {character.weight}
    </li> 
    <li>
        <strong>Base Stats: </strong>
        {arrayCheck(character.stats).map(({stat, base_stat, effort}) => 
      <>
        <p>Stat: {stat.name}</p>
        <p>Base Stat: {base_stat}</p>
        <p>Effort: {effort}</p>
      </>
        )}
    </li>
    </ul>
    </section>
    <img className ='pokemonImage' src={`https://pokeres.bastionbot.org/images/pokemon/${characterID}.png`} alt="Logo" />
  </>
    );
  };


export default CharacterView;
