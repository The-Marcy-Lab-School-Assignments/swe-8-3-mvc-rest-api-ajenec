const getId = require("../utils/getId");

const foods = [
  { name: "Pizza", id: getId() },
  { name: "Steak", id: getId() },
  { name: "Nuggets", id: getId() },
];

class Food {
  static create(name) {
    const newFood = {
      name,
      id: getId(),
    };
    foods.push(newFood);
    return newFood;
  }

  //get ALL values
  static list() {
    return [...foods];
  }

  //get ONE value
  static find(id) {
    return foods.find((food) => food.id === id);
  }

  // UPDATE ONE value
  static editName(id, newName) {
    const food = Food.find(id);
    if (!food) return null;
    food.name = newName;
    return food;
  }

  // DELETE ONE value
  static delete(id) {
    const foodIndex = foods.findIndex((food) => food.id === id);
    if (foodIndex < 0) return false;

    foods.splice(foodIndex, 1);
    return true;
  }
}

module.exports = Food;

/* 
Take a moment and play with these class methods. Try the following and
run this file with `node Fellow.js`:

console.log(Fellow.list())
console.log(Fellow.find(1))
console.log(Fellow.editName(1, 'ZO!!'))
console.log(Fellow.delete(2))
console.log(Fellow.list())
*/
