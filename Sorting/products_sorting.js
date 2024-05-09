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


function sortCaseInsensitiveProducts(a, b) { //better way to go about this?
    let aUpper = a.product.toUpperCase();
    let bUpper = b.product.toUpperCase();
    if (aUpper < bUpper) {return -1;}
    else if (aUpper == bUpper) {return 0;}
    else {return 1;}
}

function sortByPrice(a,b){
    return b.price-a.price
}

products.sort(sortCaseInsensitiveProducts);
console.log(products);
console.log(`\n==================================\n`)

products.sort(sortByPrice);
console.log(products);

