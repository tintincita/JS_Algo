let read = require("readline-sync");


/*
// ARRAY INPUT
length = read.questionFloat("combien nombres : ");

let n = [];
for (i=0 ; i<length ; i++) {
    n[i] = read.questionFloat(`nombre ${i+1} ?`);
}
console.log(n);
*/

// TESTING ARRAY
n= [5,9,6,5,4654654654,321,5687,231];
let length = n.length;
console.log(n);

let result;


result = n[0];


for (i=0; i<length-1; i++) {
    let possibleResult;
    (n[i]> n[i+1]? possibleResult = n[i] : possibleResult = n[i+1]);
    (result > possibleResult ? result = result : result = possibleResult);
    
}


console.log(`le plus grande est ${result}`);

