"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

console.log(`My Average: ${myAverage.toFixed(2)}
Your Average: ${yourAverage.toFixed(2)}`);
console.log("")
console.log(`My Median: ${getMedian(myScores)}
Your Median: ${getMedian(yourScores)}`);

function getAverage(scores){
let average = 0;
    for(let score of scores ){
        average = average + score;   
    }
    return average/scores.length;
}




function getMedian(scores){
    scores.sort() 
    let middleValue1 = 0;
    let middleValue2 = 0;
    if(scores.length % 2 == 0){ //even
        middleValue1 = scores.length /2;
        middleValue2 = middleValue1 + 1;
        return((scores[middleValue1] + scores[middleValue2])/2);
    } else { //odd
        middleValue1 = Math.round(scores.length / 2);
        return scores[middleValue1];
    }
}