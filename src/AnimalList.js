import React, { useState } from "react";
import "./App.css";

const animalsData = [
    {
        id: 1,
        species: "Dog",
        name: "Rex",
        dateOfBirth: new Date().toDateString(),
      },
      {
        id: 2,
        species: "Cat",
        name: "Snowball",
        dateOfBirth: new Date().toDateString(),
      },
      {
        id: 3,
        species: "Rabbit",
        name: "Fluffy",
        dateOfBirth: new Date().toDateString(),
      },
      {
        id: 4,
        species: "Hedgehog",
        name: "Needle",
        dateOfBirth: new Date().toDateString(),
      },
      {
        id: 5,
        species: "Lion",
        name: "Simba",
        dateOfBirth: new Date().toDateString(),
      },
      {
        id: 6,
        species: "Parrot",
        name: "Wings",
        dateOfBirth: "",
      },
    ];

const sectorsData = [
      "Birds",
      "Mammals",
      "Amphibians",
      "Reptiles",
      "Fish",
      "Insects",
    ];

function AnimalList() {
    const [animals, setAnimals] = useState[animalsData];
    const [sectors, setSectors] = useState(sectorsData);
    const [newAnimal, setNewAnimal] = useState ({
      id: "",
      species: "",
      name: "",
      dateOfBirth: "",
      sector: sectors[0],
    });   

    const handleRemoveAnimal = (animalIndex) => {
      setAnimals([
        ...animals.slice(0, animalIndex),
        ...animals.slice(animalIndex + 1),
      ]);
    };

    const handleMoveAnimalToTop = (animalIndex) => {
      setAnimals([
        animals[animalIndex],
        ...animals.slice(0, animalIndex),
        ...animals.slice(animalIndex + 1),
      ]);
    };

    const handleAddNameToNewAnimal = (name) => {
      setNewAnimal({
        ...newAnimal,
        id: Math.random(),
        name,
      });
    };

    const handleAddSpeciesToNewAnimal = (species) => {
      setNewAnimal({
        ...newAnimal,
        species,
      });
    };

    const handleAddDateToNewAnimal = (dateOfBirth) => {
      setNewAnimal({
        ...newAnimal,
        dateOfBirth: new Date(dateOfBirth),
      });
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();

      setAnimals([...animals, newAnimal]);
      setNewAnimal({
        id: "",
        species: "",
        name: "",
        dateOfBirth: "",
        sector: sectors[0],
      });
    };

    const handleSectorChange = (sectorValue) => {
      setNewAnimal({
        ...newAnimal,
        sector: sectorValue,
      });
    };

    const checkAnimalsWithSector = (sector) => {
      const secttorAnimals = animals.filter((animal) => animal.sector === sector);

      alert(JSON.stringify(secttorAnimals));
    };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
        required
        type="text"
        value={newAnimal.name}
        onChange={(e)=>handleAddNameToNewAnimal(e.target.value)}
        ></input>
        <input
        required
        type="text"
        value={newAnimal.species}
        onChange={(e)=>handleAddSpeciesToNewAnimal(e.target.value)}
        ></input>
        <input
        required
        type="date"
        value={newAnimal.dateOfBirth ? newAnimal.dateOfBirth.toISOString().substring(1, 10) : ""}
        onChange={(e)=>handleAddDateToNewAnimal(e.target.value)}
        ></input>
        <select onChange={(e) => handleSectorChange(e.target.value)} value = {newAnimal.sector}>{sectors.map((sector, index) => (
          <option key = {index}>{sector}</option>
        ))}</select>
        <button type="submit">Add new animal</button>
      </form>
      <h1>Animals</h1>
      <table>
        <thead>
          <th>Species</th>
          <th>Name</th>
          <th>Date of birth</th>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={animal.id}>
              <td>{animal.species}</td>
              <td>{animal.name}</td>
              <td>{animal.dateOfBirth ? animal.dateOfBirth : "Nepoznat"}</td>
              <td>
                <button onClick={()=>handleRemoveAnimal(index)}>Remove</button>
              </td>
              <td>
                <button onClick={()=>handleMoveAnimalToTop(index)}>ON TOP</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Sektori</h3>
      <table>
        <thead>
          <tr>
            <th>Sektor</th>
          </tr>
        </thead>
        <tbody>
          {sectors.map((sector, index) => (
            <tr key = {index}>
              <td>{sector}</td>
              <td>
                <button onClick={()=> checkAnimalsWithSector(sector)}>Check animals</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalList;