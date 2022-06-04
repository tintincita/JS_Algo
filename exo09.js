let read = require("readline-sync");

let size = read.question("taille de pyramide de cote ? ");


let text = "";

for (i = 0; i < size; i++){
    text = text+"*"
    console.log(text);
}

for (i = 0; i < size; i++){
    text = text.slice(0,-1);
    console.log(text);
}