let read = require("readline-sync");


let size = read.questionInt("quelle taille de pyramide? ");



for (i=0 ; i<size ; i++) {
    let pyramid = " ".repeat(size-i) + "*" +"*".repeat(i*2);
    console.log(pyramid);
}