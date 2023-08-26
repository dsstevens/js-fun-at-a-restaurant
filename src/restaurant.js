function createRestaurant(restaurant){
  var restaurant = {
    name: restaurant,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

// function addMenuItem(restaurant, menuItem){
// console.log("restaurant--->", restaurant)
// console.log("menuItem--->", menuItem)
// for(var i = 0; i < )
// if (menuItem.type === restaurant.menus[i]){

// }
// restaurant.menus.lunch.push(menuItem)

// }

// function addMenuItem(restaurant, menuItem) {
//   if (!restaurant.menus[menuItem.type]) {
//     restaurant.menus[menuItem.type] = []; // Create the menu array if it doesn't exist
//   }
  
//   restaurant.menus[menuItem.type].push(menuItem);
// }

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

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}