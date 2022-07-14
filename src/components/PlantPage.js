import React, { useEffect, useState}  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = ('http://localhost:6001/plants')

function PlantPage() {
  
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  
  function addNewPlant(plant) {
    const oneMorePlant = [...plants, plant]
    setPlants(oneMorePlant)
  }

  function searchForPlants(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const searchedPlants = plants.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search search={search} searchForPlants={searchForPlants} />
      <PlantList plants={plants} searchedPlants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
