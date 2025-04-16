const getId = require("../utils/getId");

const fellows = [
  { name: "Ajene", id: getId() },
  { name: "Alisa", id: getId() },
  { name: "Jay-J", id: getId() },
];

class Fellow {
  static create(name) {
    const newFellow = {
      name,
      id: getId(),
    };
    fellows.push(newFellow);
    return newFellow;
  }

  //get ALL values
  static list() {
    return [...fellows];
  }

  //get ONE value
  static find(id) {
    return fellows.find((fellow) => fellow.id === id);
  }

  // UPDATE ONE value
  static editName(id, newName) {
    const fellow = Fellow.find(id);
    if (!fellow) return null;
    fellow.name = newName;
    return fellow;
  }

  // DELETE ONE value
  static delete(id) {
    const fellowIndex = fellows.findIndex((fellow) => fellow.id === id);
    if (fellowIndex < 0) return false;

    fellows.splice(fellowIndex, 1);
    return true;
  }
}

module.exports = Fellow;

/* 
Take a moment and play with these class methods. Try the following and
run this file with `node Fellow.js`:

console.log(Fellow.list())
console.log(Fellow.find(1))
console.log(Fellow.editName(1, 'ZO!!'))
console.log(Fellow.delete(2))
console.log(Fellow.list())
*/
