
let read = require("readline-sync");
let firstNumber = read.questionFloat("One number ? ");
let secondNumber = read.questionFloat("Second number ? ");
//let result = Number(firstNumber)+Number(secondNumber);
let result = firstNumber+secondNumber;
console.log(`${firstNumber} + ${secondNumber} = ${result}`);
