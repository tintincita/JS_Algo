let read = require("readline-sync");

let result=0, text ="", endNumber;

let startNumber = read.questionInt("saisir une nombre debut: ");

do {
    endNumber = read.questionInt("saisir une nombre fin: ");
} while (endNumber < startNumber)


let resultFast = (endNumber+startNumber)*(endNumber-startNumber+1)/2;

for (i=startNumber;i<=endNumber;i++) {
    text = text + i;
    (i<endNumber? text = text + " + ": text=text+" = ")
    result = result + i;
}

console.log(text + result);
console.log(resultFast);