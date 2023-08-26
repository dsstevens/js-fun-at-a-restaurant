function createRestaurant(restaurant) {
  var restaurant = {
    name: restaurant,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  if (!restaurant.menus[menuItem.type]) {
    restaurant.menus[menuItem.type] = [];
  }
  var exists = false;
  for (var i = 0; i < restaurant.menus[menuItem.type].length; i++) {
    if (restaurant.menus[menuItem.type][i].name === menuItem.name) {
      exists = true;
      break;
    }
  }
  if (!exists) {
    restaurant.menus[menuItem.type].push(menuItem);
  }
}

function removeMenuItem(restaurant, itemName, menuItem) {
  var menuArray = restaurant.menus[menuItem];
  for (var i = 0; i < menuArray.length; i++) {
    if (menuArray[i].type === menuItem) {
      menuArray.splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${menuItem} menu!`;
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
}

function checkForFood(restaurant, itemObject) {
  for (var i = 0; i < restaurant.menus[itemObject.type].length; i++) {
    if (restaurant.menus[itemObject.type][i].name === itemObject.name) {
      return `Yes, we're serving ${itemObject.name} today!`;
    }
  }
  return `Sorry, we aren't serving ${itemObject.name} today.`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood,
};
