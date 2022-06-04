let read = require("readline-sync");

let size = read.question("taille de pyramide de cote ? ");



for (i = 0; i < size; i++){
    let text = "*".repeat(i);
    console.log(text);
}

for (i = size; i > 0; i--){
    let text = "*".repeat(i);
    console.log(text);
}