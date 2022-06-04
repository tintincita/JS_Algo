let read = require("readline-sync");

let inputNumber = read.questionInt("saisir une nombre: ");

//let resultFast = (inputNumber+1)*inputNumber/2;
let result=0, text ="";

for (i=1;i<=inputNumber;i++) {
    text = text + i;
    (i < inputNumber? text = text + " + ": text += " = ")
    result = result + i;
}

console.log(text + result);