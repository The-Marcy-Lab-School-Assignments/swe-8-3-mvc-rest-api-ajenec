const express = require("express");
const path = require("path");

const {
  serveFellows,
  serveFellow,
  createFellow,
  updateFellow,
  deleteFellow,
} = require("./controllers/fellowControllers");

const app = express();
//const pathToFrontendDist = path.join(__dirname, "../frontend/dist");

///////////////////
// Middleware   ///
///////////////////

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  req.time = time;
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);

//////////////////
// Endpoints  ///
/////////////////
app.get("/api/fellows", serveFellows);
app.get("/api/fellows/:id", serveFellow);
app.post("/api/fellows", createFellow);
app.patch("/api/fellows/:id", updateFellow);
app.delete("/api/fellows/:id", deleteFellow);

const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
