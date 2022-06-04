let read = require("readline-sync");


let n1 = read.questionFloat("saisir un nombre : ");
let n2 = read.questionFloat("saisir un autre nombre : ");
let n3 = read.questionFloat("et encore une fois : ");


if (n1 < n2 || n1 < n3) {
    if (n2>n3) {
        console.log(`${n2} is the biggest number`)
    } else {
        console.log(`${n3} is the biggest number`)
    }
} else {
    console.log(`${n1} is the biggest number`)
}


