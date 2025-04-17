const Food = require("../models/FavFood");

// Get all (READ)
const serveFoods = (req, res) => {
  const foodsList = Food.list();
  res.send(foodsList);
};

// Get one (READ)
const serveFood = (req, res) => {
  const { id } = req.params;
  const food = Food.find(Number(id));

  if (!food) {
    return res.status(404).send({
      message: `No fav food with the id ${id}`,
    });
  }
  res.send(food);
};

// CREATE
const createFood = (req, res) => {
  const { foodName } = req.body;

  if (!foodName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const newFood = Food.create(foodName);
  res.send(newFood);
};

//UPDATE
const updateFood = (req, res) => {
  const { foodName } = req.body;

  if (!foodName) {
    return res.status(400).send({ message: "Invalid Name" });
  }
  const { id } = req.params;
  const updatedFood = Food.editName(Number(id), foodName);
  if (!updatedFood) {
    return res.status(404).send({
      message: `No fav food with the id ${id}`,
    });
  }
  res.send(updatedFood);
};

//DELETE
const deleteFood = (req, res) => {
  const { id } = req.params;
  const didDelete = Food.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No fav food with the id ${id}`,
    });
  }
  res.sendStatus(204);
};

module.exports = {
  serveFoods,
  serveFood,
  createFood,
  updateFood,
  deleteFood,
};
