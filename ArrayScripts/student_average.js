"use strict";

let students = [
    { name: "Zephaniah", 
    scores: [100, 96, 99, 92] },

    { name: "Pursalane", 
    scores: [92, 89, 96, 100, 94] },

    { name: "Siddalee", 
    scores: [86, 72, 92] },

    { name: "Ian", 
    scores: [98, 84, 89, 100, 100, 76] },

    { name: "Elisha", 
    scores: [89, 100] },

    { name: "Ezra", 
    scores: [100, 99, 100, 87] }
];

getStudentAverage(students);

function getStudentAverage(students){
    let totalScore;

    for(let student of students){
        totalScore = 0;

        for(let score of student.scores){
            totalScore += score;
        }
        console.log(`${student.name}'s Average is ${(totalScore/student.scores.length).toFixed(2)}`);
    }
}