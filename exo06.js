//load readline-sync for user input in console
let read = require("readline-sync");

// declare constants and variables
const operateurs = ["*","+","/","-"]
let firstNumber, opInput, secondNumber, result;

// get user input
firstNumber = read.questionFloat("saisir premier opérande: ");

do {
opInput = read.question("saisir une opérateur (+,*,/,-) : ");
} while (!operateurs.includes(opInput)) // validate user input

secondNumber = read.questionFloat("saisir le deuxieme opérande: ");

// calculate response
switch (opInput) {
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = firstNumber / secondNumber;
        break;
    case "+":
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
}

// dsiplay response
console.log(`${firstNumber} ${opInput} ${secondNumber} = ${result}`);