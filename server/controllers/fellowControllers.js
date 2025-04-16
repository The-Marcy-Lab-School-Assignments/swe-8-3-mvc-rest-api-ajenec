const Fellow = require("../models/Fellow");

// Get all (READ)
const serveFellows = (req, res) => {
  const fellowsList = Fellow.list();
  res.send(fellowsList);
};

// Get one (READ)
const serveFellow = (req, res) => {
  const { id } = req.params;
  const fellow = Fellow.find(Number(id));

  if (!fellow) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`,
    });
  }
  res.send(fellow);
};

// CREATE
const createFellow = (req, res) => {
  const { fellowName } = req.body;

  if (!fellowName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const newFellow = Fellow.create(fellowName);
  res.send(newFellow);
};

//UPDATE
const updateFellow = (req, res) => {
  const { fellowName } = req.body;

  if (!fellowName) {
    return res.status(400).send({ message: "Invalid Name" });
  }
  const { id } = req.params;
  const updatedFellow = Fellow.editName(Number(id), fellowName);
  if (!updatedFellow) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`,
    });
  }
  res.send(updatedFellow);
};

//DELETE
const deleteFellow = (req, res) => {
  const { id } = req.params;
  const didDelete = Fellow.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`,
    });
  }
  res.sendStatus(204);
};

module.exports = {
  serveFellows,
  serveFellow,
  createFellow,
  updateFellow,
  deleteFellow,
};
