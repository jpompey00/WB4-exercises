"use strict";

let products = [ //chat gpt is good for test data
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch Kids", price: 4.49},
    {product: "Hershey's Kisses", price: 3.99},
    {product: "Twix", price: 1.99},
    {product: "Snickers", price: 1.49},
    {product: "Reese's Peanut Butter Cups", price: 3.29},
    {product: "Kit Kat", price: 2.19}
];

// Which candies costs less than $4.00?
console.log("Which candies costs less than $4.00")
console.log(findCandiesByPriceLessThan(4));

// Which candies has "M&M" its name?
console.log("Which candies has M&M its name");
console.log(findCandiesByName("M&M"));

// Do we carry "Swedish Fish"?
console.log("Do we carry Swedish Fish")
// console.log(findCandyByExactName("Swedish Fish"));
console.log(
    findCandyByExactName("Swedish Fish") ? "Yes" : "No"
);





function findCandiesByPriceLessThan(price){
    let matchingItems = [];
    for(let product of products){
        if(product.price < price){
            matchingItems.push(product.product);
        }
    }
    return matchingItems;
}


function findCandiesByName(name){
    let matchingItems = [];
    for(let product of products){
        if(product.product.includes(name)){
            matchingItems.push(product.product);
        }
    }
    return matchingItems;
}

function findCandyByExactName(name){
    let matchingItems = [];
    for(let product of products){
        if(product.product == name){
            return true
        }
    }
}
