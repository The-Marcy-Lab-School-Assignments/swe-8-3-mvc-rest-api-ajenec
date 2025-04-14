import handleFetch from "./handleFetch";

export const getAllAnimals = async () => {
  const [allAnimals, error] = await handleFetch("api/animals");
  return [allAnimals, error];
};

export const getAnimalById = async () => {
  const [animal, error] = await handleFetch(`/api/animals:id${id}`);
  return [animal, error];
};

export const createAnimal = async (newName) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ newName }),
  };

  const [newName, error] = await handleFetch("/api/animals", options);
  return [newName, error];
};

export const deleteAnimal = async () => {
  const options = {
    method: "DELETE",
  };
  const [success, error] = await handleFetch(`/api/animals:id${id}`, options);
  return [success, error];
};

export const updateAnimalHabitat = async (newPlace, id) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ newPlace }),
  };

  const [updatedAnimal, error] = await handleFetch(
    `/api/animals:id${id}`,
    options
  );
  return [updatedAnimal, error];
};
