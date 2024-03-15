const stock = {
  macbook: 2,
  iphone: 4,
};
function processPayment(itemName) {
  if (stock.hasOwnProperty(itemName)) {
    stock[itemName]--;
    console.log(`Payment is being processed for item ${itemName} ${stock[itemName]} remaining.`);
    return stock;
  }
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, cbFunction, cbError) {
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName] > 0) {
    cbFunction(itemName);
  } else {
    cbError(itemName);
  }
}

const userInput = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone)"
);
const result = processOrder(userInput.toLowerCase(), processPayment, processError);
console.log(result);
