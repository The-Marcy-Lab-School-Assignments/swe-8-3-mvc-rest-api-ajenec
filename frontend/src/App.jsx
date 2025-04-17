import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/foods/:id" element={<FoodDetails />}></Route>
    </Routes>
  );
}

export default App;
