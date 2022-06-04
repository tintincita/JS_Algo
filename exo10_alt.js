let read = require("readline-sync");


let size = read.questionInt("quelle taille de pyramide? ");



for (i=0 ; i<size ; i++) {
    let space = " ".repeat(size-i);

    let pyramid = space + "*" +"*".repeat(i*2);
    console.log(pyramid);
}