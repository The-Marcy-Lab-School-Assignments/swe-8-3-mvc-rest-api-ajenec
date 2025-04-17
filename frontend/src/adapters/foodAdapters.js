import handleFetch from "./handleFetch";

export const getAllFoods = async () => {
  const [allFoods, error] = await handleFetch("/api/foods/");
  return [allFoods, error];
};

export const getFoodById = async (id) => {
  const [food, error] = await handleFetch(`/api/foods/${id}`);
  return [food, error];
};

export const createFood = async (foodName) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ foodName }),
  };

  const [newFoods, error] = await handleFetch(`/api/foods/`, options);
  return [newFoods, error];
};

export const deleteFood = async (id) => {
  const options = {
    method: "DELETE",
  };
  const [success, error] = await handleFetch(`/api/foods/${id}`, options);
  return [success, error];
};

export const updateFoodName = async (id, foodName) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ foodName }),
  };

  const [updatedFood, error] = await handleFetch(`/api/foods/${id}`, options);
  return [updatedFood, error];
};
