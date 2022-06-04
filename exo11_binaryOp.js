let read = require("readline-sync");

let total = read.questionFloat("gimme a number (up to two decimals, please): ");

total = total*100;
console.log(total);

const billValues = [50000, 20000, 2000, 1000 , 500, 200, 100, 50, 2, 1];
const billValueNames = [500, 200, 20, 10 , 5, 2, 1, 0.5, 0.02, 0.01];

let billQtts = [];

let carry = total;

for (i = 0; i<billValues.length; i++) {
    billQtts[i] = ~~(carry/billValues[i]);
    carry = carry - billQtts[i]*billValues[i];
    console.log(`${billQtts[i]} bills of ${billValueNames[i]}`)
}

