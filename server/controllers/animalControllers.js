const Animal = require("../models/Animals");

// Get all (READ)
const serveAnimals = (req, res) => {
  const animalsList = Animal.list();
  res.send(animalsList);
};

//Get one (READ)
const serveAnimal = (req, res) => {
  const { id } = req.params;
  const animal = Animal.find(Number(id));

  if (!animal) {
    return res.status(404).send({
      message: `No animal with the id ${id}`,
    });
  }
  res.send(animal);
};

// CREATE
const createAnimal = (req, res) => {
  const { newName, newPlace } = req.body;

  if (!newName && !newPlace) {
    return res.status(400).send({ message: "Invalid Animal" });
  }

  const newAnimal = Animal.create(newName, newPlace);
  res.send(newAnimal);
};

//UPDATE
const updateHabitat = (req, res) => {
  const { newPlace } = req.body;
  if (!newPlace) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const { id } = req.params;
  const updatedAnimal = Animal.editHabitat(Number(id), newPlace);

  if (!updatedAnimal) {
    return res.status(404).send({ message: `No animal with the id ${id}` });
  }
  res.send(updatedAnimal);
};

const deleteAnimal = (req, res) => {
  const { id } = req.params;
  const didDelete = Animal.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({ message: `No fellow with the id ${id}` });
  }
  res.sendStatus(204);
};

module.exports = {
  serveAnimals,
  serveAnimal,
  createAnimal,
  updateHabitat,
  deleteAnimal,
};
