/*        *** Object , Array and function ***
  Assignment 1: Building Your Friend List
Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends. 2. Create three separate objects, each representing a friend, with properties like firstName,  lastName, and optionally id.
3. Add these friend objects to the friends array within the people object. 4. Output the entire people object to the console, displaying your information and your  friend list. */
let people = {
    friends: [],
};
let friend1 = {
    firstName: "Aleena",
    lastName: "Khan",
    id: 111,
};
let friend2 = {
    firstName: "Ali",
    lastName: "Adnan",
    id: 222,
};
let friend3 = {
    firstName: "Uzma",
    lastName: "Asif",
    id: 333,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//  --------X-----X-------
/* Assignment-2: Company Product Catalog

Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,  model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method. 4. Access and log the quantity property of a specific product (e.g., third product) in the  inventory array.
5. Explore adding and accessing more elements within the inventory array to understand  how to manage product data.*/
console.log("Assignment-2: Company Product Catalog: ");
let inventory = [];
let product1 = {
    name: "Laptop",
    model: "Dell Latitude 3310",
    cost: 1500,
    quantity: 10,
};
let product2 = {
    name: "Smartphone",
    model: "iPhone 15",
    cost: 980,
    quantity: 38,
};
let product3 = {
    name: "Camera",
    model: "canon 6D ",
    cost: 299,
    quantity: 15,
};
inventory.push(product1, product2, product3);
console.log(`Quantity of ${inventory[2].name} (${inventory[2].model}): ${inventory[2].quantity}`);
let product4 = {
    name: "Speaker",
    model: "Audionic A5",
    cost: 399,
    quantity: 30,
};
inventory.push(product4);
console.log(`Cost of ${inventory[3].name} (${inventory[3].model}): $${inventory[3].cost}`);
console.log("Current Inventory:", inventory);
export {};
