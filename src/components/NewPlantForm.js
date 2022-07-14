import React, {useState} from "react";

function NewPlantForm( {addNewPlant} ) {

  const [plantName, setPlantName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleName(event) {
    setPlantName(event.target.value)
  }

  function handleImage(event) {
    setImage(event.target.value)
  }

  function handlePrice(event) {
    setPrice(event.target.value)
  }

  const formData = {
    "name": plantName,
    "image": image,
    "price": price
  }

  function handleSubmit(event) {
    event.preventDefault()
  
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newItem => addNewPlant(newItem));
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
