import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllFoods, createFood } from "../adapters/foodAdapters";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [newFoodName, setNewFoodName] = useState("");
  const [newlyAddedFood, setNewlyAddedFood] = useState({});

  useEffect(() => {
    const doFetch = async () => {
      const [allFoods, error] = await getAllFoods();
      setFoods(allFoods);
    };
    doFetch();
  }, [newlyAddedFood]);

  const handleCreateFood = async (e) => {
    e.preventDefault();
    const [newFood, error] = await createFood(newFoodName);
    setNewlyAddedFood(newFood);
    setNewFoodName("");
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleCreateFood}>
        <label htmlFor="name">Add a Foods</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {foods.map((food) => {
          return (
            <li key={food.id}>
              <Link to={`/foods/${food.id}`}>
                {food.name} (Fav {food.id})
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
