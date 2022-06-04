let read = require("readline-sync");

let size = read.question("taille de pyramide de cote ? ");


let text = "";

for (i = 0; i < size; i++){
    text = text+"*"
    console.log(text);
}

for (i = size-1; i > 0; i--){
    console.log(text.substring(0,i));
}