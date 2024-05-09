"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

console.log(`My Average: ${myAverage.toFixed(2)}
\nYour Average: ${yourAverage.toFixed(2)}`);

function getAverage(scores){
let average = 0;
    for(let score of scores ){
        average = average + score;   
    }
    return average/scores.length;
}