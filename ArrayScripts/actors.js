"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

// Who is the Academy Member whose ID is 187?
// Who has have been in at least 3 films?
// Who has a name that starts with "Bob"?
// HARDER: Which Academy Members have been in a film
// that starts with "A"


function findMemberById(findID){
    for(let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].memID == findID){
            return academyMembers[i].name
        }
    }
}

function inAtLeastSomeFilms(numOfFilms){
    let outputArray = [];
    for(let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].films.length >= numOfFilms){
            outputArray.push(academyMembers[i].name);
        }
    }
    return outputArray;
}

function nameThatStartsWith(name){
    let outputArray = [];
    for(let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].name.startsWith(name)){
            outputArray.push(academyMembers[i]);
        }
    }
    return outputArray;
}

function filmThatStartsWith(letter){
    let outputArray = [];
    for(let i = 0; i < academyMembers.length; i++){
        for(let film of academyMembers[i].films){
            if(film.startsWith(letter)){
                outputArray.push(academyMembers[i].name);
                break;
            }
        }
    }
    return outputArray;
}

// console.log(findMemberById(187));

// console.log(inAtLeastSomeFilms(3));

//console.log(filmThatStartsWith("A"));



// Who is the Academy Member whose ID is 187?
function whoseIdAtAcademyIs() {
    let whoseId = [];
    for (let i = 0; i < academyMembers.length; i++) {
        if (academyMembers[i].memID === 187) {
            whoseId.push(academyMembers[i].name)
        }
    }
    return whoseId;
}



