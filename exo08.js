let read = require("readline-sync");

let size = read.questionInt("quelle taille de escalier? ");

let text = "";

for (i=0 ; i<size ; i++) {
    text = text + "*";
    console.log(text);
}