import React, { useState, useEffect } from 'react';


export default function Search({pokemon}) {
  
    
 const [searchResults, setSearchResults] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
  
useEffect(() => {
  (searchTerm === "") ? 
    setSearchResults([])
  :
    setSearchResults(
      pokemon.filter(poki => poki.toLowerCase().includes(searchTerm))
      .map(p => p));
  
  }, [searchTerm, pokemon]);

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  
  return (
        <div>
             <input 
            type = "text"
            placeholder = "Search"
            value = {searchTerm}
            onChange = {handleChange}
            />
            {searchResults.map(item => (
            <li>{item}</li>
            ))
            }
       

        </div>
    )
}
