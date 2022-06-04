let list = [];

// populate consequential list
for (i=1; i<=100; i++){
    list.push(i);
}

// change elements
for (i=0; i<100; i++){
    let tempEl = "";

    if (Number.isInteger(list[i]/3)) {
     tempEl = "Fizz";
    }
    if (Number.isInteger(list[i]/5)) {
        tempEl = tempEl +"Buzz";
    }

    if (tempEl != "" ){
        list[i] = tempEl;
    } 

}


// let test = Number.isInteger(4/15);
console.log(list);
