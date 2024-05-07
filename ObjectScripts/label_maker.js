"use strict";

let label ={
    name: "Julian",
    address: "123 Sesame Street",
    city: "Atlanta",
    state: "Georgia",
    zip: "30349"
}


function printContact(label){
    console.log(`${label.name}\n${label.address}\n${label.city}, ${label.state} ${label.zip}`);
}

printContact(label);