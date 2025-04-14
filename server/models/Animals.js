const getId = require("../utils/getId");

const animals = [
  { name: "Dog", habitat: "Home", id: getId() },
  { name: "Cow", habitat: "Farm", id: getId() },
  { name: "Goat", habitat: "Mountain", id: getId() },
];

class Animal {
  static create(name, habitat) {
    const newAnimal = {
      name,
      habitat,
      id: getId(),
    };

    animals.push(newAnimal);
    return newAnimal;
  }
  // Get all values from the "database"
  static list() {
    return [...animals];
  }

  // Get one value
  static find(id) {
    return animals.find((animal) => animal.id === id);
  }

  //Update one value
  static editHabitat(id, newPlace) {
    const animal = Animal.find(id);
    if (!animal) return null;
    animal.habitat = newPlace;
    return animal;
  }

  // Delete one value
  static delete(id) {
    const animalIndex = animals.findIndex((animal) => animal.id === id);
    if (animalIndex < 0) return false;

    animals.splice(animalIndex, 1);
    return true;
  }
}

module.exports = Animal;
