import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {searchedPlants} ) {
  return (
    <ul className="cards">{searchedPlants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}</ul>
  );
}

export default PlantList;
