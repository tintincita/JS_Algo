let list = [];

let tempEl;

for (i=1; i<=100; i++){
    tempEl = i;
    if (Number.isInteger(i/3)) {
     tempEl = "Fizz";
    } else if (Number.isInteger(i/5)) {
        tempEl = "Buzz";
    } 

    if (Number.isInteger(i/15)){
        tempEl = "FizzBuzz";
    }

    list.push(tempEl);
}


// let test = Number.isInteger(4/15);
console.log(list);
