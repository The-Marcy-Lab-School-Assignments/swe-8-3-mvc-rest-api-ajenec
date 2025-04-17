import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getFoodById,
  updateFoodName,
  deleteFood,
} from "../adapters/foodAdapters";

const FoodDetails = () => {
  const [food, setFood] = useState({});
  const [newFoodName, setNewFoodName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const doFetch = async () => {
      const [foundFood, error] = await getFoodById(id);
      setFood(foundFood);
    };
    doFetch();
  }, []);

  const handleDeleteFood = async () => {
    await deleteFood(id);
    navigate("/");
  };

  const handleUpdateFood = async (e) => {
    e.preventDefault();

    const [updatedFood, error] = await updateFoodName(id, newFoodName);
    setFood(updatedFood);
    setNewFoodName("");
  };

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Favorite Food Details</h1>
      <p>Name: {food.name}</p>
      <p>Id: {food.id}</p>
      <form onSubmit={handleUpdateFood}>
        <label htmlFor="name">Update Food Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
          placeholder="New Name"
        />
      </form>
      <button onClick={handleDeleteFood} className="danger">
        Delete Food
      </button>
    </>
  );
};

export default FoodDetails;
