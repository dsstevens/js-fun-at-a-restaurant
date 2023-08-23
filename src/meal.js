function nameMenuItem(name) {
  return `Delicious ${name}`;
}
function createMenuItem(name, price, type) {
  newMenuObject = {
    name: name,
    price: price,
    type: type,
  };
  return newMenuObject;
}
function addIngredients(ingredient, array) {
  if (!array.includes(ingredient)) {
    array.push(ingredient);
  }
  return array;
}
function formatPrice(price) {
  return `$${price}`;
}
function decreasePrice(price) {
  var decreasedPrice = price - price * 0.1;
  return decreasedPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipeObject = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipeObject
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};
