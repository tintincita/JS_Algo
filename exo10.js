let read = require("readline-sync");


let size = read.questionInt("quelle taille de sapin? ");
let text = "";
let textSpace = "";
let sizeSpace = size;


for (i=0 ; i<size ; i++) {

    for (j = sizeSpace; j > 0; j--) {
        textSpace = textSpace + " ";
        //console.log(j);
    }
    text = text + "* ";
    sizeSpace--;
    console.log(textSpace+text);
    textSpace ="";
}