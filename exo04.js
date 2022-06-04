let read = require("readline-sync");

let n= []
n[0] = read.questionFloat("saisir un nombre : ");
n[1] = read.questionFloat("saisir un autre nombre : ");
n[2] = read.questionFloat("et encore une fois : ");

console.log(n);

let orderedN = n.sort(function(a, b){return b - a});

console.log(orderedN[0]);

