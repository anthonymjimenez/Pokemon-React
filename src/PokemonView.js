import React, { useEffect, useState } from 'react';

const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
      .then(response => response.json())
      .then(response => setCharacter(response));
      
      console.log(character);
  }, [match.params.id]);

  return (
      <>
     {character.base_experience}
      </>
  )
};

export default CharacterView;
