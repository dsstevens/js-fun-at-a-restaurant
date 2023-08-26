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

function removeMenuItem(restaurant,itemName, menuItem){
  // console.log("menus --->", restaurant.menus)
  // console.log("menu item --->" , restaurant.menus[menuItem])
  // console.log("item name --->",itemName)
// confused why the 3rd arg on line 167 for "breakfast" comes out to be menuItem as a whole object in the param
  var menuArray = restaurant.menus[menuItem];
  for(var i = 0; i < menuArray.length; i++ ){
    if (menuArray[i].type === menuItem) {
      menuArray.splice(i,1);
      return `No one is eating our ${itemName} - it has been removed from the ${menuItem} menu!`
    }
  } return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  // checkForFood
}