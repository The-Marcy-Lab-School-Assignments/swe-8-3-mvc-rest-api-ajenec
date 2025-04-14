const express = require("express");
const path = require("path");
const {
  serveAnimals,
  serveAnimal,
  createAnimal,
  updateHabitat,
  deleteAnimal,
} = require("./controllers/animalControllers");
const app = express();
const pathToFrontendDist = path.join(__dirname, "../frontend/dist");

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  req.time = time;
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

const serveStatic = express.static(pathToFrontendDist);

const parseJSON = express.json();

app.use(logRoutes);
app.use(serveStatic);
app.use(parseJSON);

// --------------------> ENDPOINTS
app.get("/api/animals", serveAnimals);
app.get("/api/animals:id", serveAnimal);
app.get("/api/animals", createAnimal);
app.get("/api/animals:id", updateHabitat);
app.get("/api/animals:id", deleteAnimal);

app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) return next();
  res.sendFile(pathToFrontendDist);
});

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
