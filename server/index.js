const express = require("express");
const path = require("path");

const {
  serveFoods,
  serveFood,
  createFood,
  updateFood,
  deleteFood,
} = require("./controllers/foodControllers");

const app = express();
const pathToFrontendDist = path.join(__dirname, "../frontend/dist");

///////////////////
// Middleware   ///
///////////////////

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

//////////////////
// Endpoints  ///
/////////////////
app.get("/api/foods", serveFoods);
app.get("/api/foods/:id", serveFood);
app.post("/api/foods", createFood);
app.patch("/api/foods/:id", updateFood);
app.delete("/api/foods/:id", deleteFood);

// app.get("*", (req, res, next) => {
//   if (req.originalUrl.startsWith("/api")) return next();
//   res.sendFile(pathToFrontendDist);
// }); ----------------------------------------------> Why does this make the frontend and server crash???

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
