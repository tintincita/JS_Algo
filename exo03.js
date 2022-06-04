
let read = require("readline-sync");
let prixFabrication = read.questionFloat("Prix Fabrication ? ");
let prixVente = read.questionFloat("Prix Vente ? ");
//let result = Number(firstNumber)+Number(secondNumber);
let result = prixVente-prixFabrication;

if (result>0){
    console.log(`Profit de ${result}`);
} else if (result <0){
    console.log(`Perte de ${-result}`);
    // alternative of using -var is Math.abs
} else {
    console.log("ni profit ni perte")
}

