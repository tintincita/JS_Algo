let read = require("readline-sync");

let n = [];
let result;


length = read.questionFloat("combien nombres : ");
for (i=0 ; i<length ; i++) {
    n[i] = read.questionFloat(`nombre ${i+1} ?`);
}
console.log(n);

//n= [5,9,6,5,4654654654,321,5687,231];
//let length = n.length;
console.log(n);
result = n[0];

let biggerOfTwo = (one, two) =>{
    let answer;
 ( one>two ? answer= one : answer = two)
 return(answer);
}


for (i=0; i<length-1; i++) {
   if (n[i]> n[i+1]){
       result = biggerOfTwo(result,n[i]);
    } else {
        result = biggerOfTwo(result,n[i+1]);
    }
    //console.log(`${i} : ${result}`);
    
}

console.log(`le plus grande est ${result}`);