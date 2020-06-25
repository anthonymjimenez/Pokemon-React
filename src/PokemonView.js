import React, { useEffect, useState } from "react";
import { arrayCheck } from "./utils/utils";
const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState({});
  const [characterID, setID] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacter(response);
        setID(response.id);
      });
  }, [match.params.id]);

  if (character.types) {
    var cType = character.types[0].type.name;
  }
  return (
    <>
      <section className="pokemonView">
        <div className="pName">
          <h1 className={cType}>{character.name}</h1>
        </div>
        <li className="type">
          <strong>Type: </strong>
          {arrayCheck(character.types).map(({ type }) => (
            <p className={type.name}>{type.name}</p>
          ))}
        </li>
        <div className="measurements">
          <li>
            <strong>Height</strong>: {character.height}
          </li>
          <li>
            <strong>Weight</strong>: {character.weight}
          </li>
        </div>
        <div className="stats">
          <li>
            <strong>Base Stats: </strong> <br />
            {arrayCheck(character.stats).map(({ stat, base_stat, effort }) => (
              <>
                <strong>
                  {stat.name[0].toUpperCase() + stat.name.slice(1)}
                </strong>
                <li>Base Stat: {base_stat}</li>
                <li>Effort: {effort}</li>
              </>
            ))}
          </li>
        </div>
      </section>
      <img
        className="pokemonImage"
        src={`https://pokeres.bastionbot.org/images/pokemon/${characterID}.png`}
        alt="Logo"
      />
    </>
  );
};

export default CharacterView;
