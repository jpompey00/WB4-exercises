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

let test = "hello my&amp; name&amp; is &amp;juli&amp;an";
let test2 = test.replaceAll("&amp;", "&");

console.log(test2);

printContact(label);