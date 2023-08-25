function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var deliveryItems = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    deliveryItems.push(deliveryOrders[i].item);
  }
  var itemString = deliveryItems.join(", ");
  return itemString;
}
// deliveryOrders[i].item concatenated into a string
//toString, join

function searchOrder(orderArray, itemName) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].item.includes(itemName)) {
      return true;
    } 
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
};
