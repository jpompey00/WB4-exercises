"use strict";
let lunch = [
    {
        item: "Steak Fajitas",
        price: 9.95
    },

    {
        item: "Chips and Guacamole",
        price: 5.25
    },

    {
        item: "Sweet Tea",
        price: 2.79
    }
];


getLunchTotal(lunch);

function getLunchTotal(reciept) {
    let subTotal = 0;
    let tax = 0;
    let tip = 0;
    for (let item of lunch) {
        subTotal += item.price;
    }

    tax = subTotal *.08;
    tip = subTotal * .18;


    console.log(`Total Due: ${(subTotal+tax+tip).toFixed(2)}`);
}

