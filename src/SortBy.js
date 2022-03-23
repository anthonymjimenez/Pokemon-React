import React, { useState } from "react";

export default function SortBy({ pokemon, setPokemon }) {
  const [buttonName, setButtonName] = useState("Ascending");
  function handleSelectChange(e) {
    if (e.target.value === "name") {
      setPokemon([...pokemon].sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else if (e.target.value === "order" || e.target.value === "") {
      setPokemon([...pokemon].sort((a, b) => (a.order > b.order ? 1 : -1)));
    } else if (e.target.value === "height") {
      setPokemon([...pokemon].sort((a, b) => (a.height > b.height ? 1 : -1)));
    } else if (e.target.value === "weight") {
      setPokemon([...pokemon].sort((a, b) => (a.weight > b.weight ? 1 : -1)));
    }
  }

  function toggleOrder() {
    buttonName === "Ascending"
      ? setButtonName("Descending")
      : setButtonName("Ascending");
    console.log("Hello");
    setPokemon([...pokemon].sort((a, b) => (!a > b ? 1 : -1)));
  }
  return (
    <>
      <div className="sortForm">
        <select className="select" onChange={handleSelectChange}>
          <option name="Search current page" value="order">
            Sort By Order
          </option>
          <option name="Search all Pokemon" value="name">
            Sort By Name
          </option>
          <option name="Search all Pokemon" value="height">
            Sort By Height
          </option>
          <option name="Search all Pokemon" value="weight">
            Sort By Weight
          </option>
        </select>
        <button onClick={toggleOrder}>{buttonName}</button>
      </div>
    </>
  );
}
