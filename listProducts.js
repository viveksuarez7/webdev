console.log("WELCOME TO MY SHOP !");

var faker = require("faker");

var randomProduct = faker.commerce.productName;
var randomPrice = faker.commerce.price;

for(var i=0;i<10;i++){
console.log(randomProduct() + " - $" + randomPrice());
}
