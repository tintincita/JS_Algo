console.log("Hello World");

/*
let beer = 100;
while (beer >= 0) {
    console.log( beer + " bottles of beer in the fridge, take one out, pass it around.");
    beer--;
}

console.log( "1 !== 1");
console.log(1 !== 1);
console.log("1 !== '1'");
console.log(1 !== "1");
console.log(" 1 !== '2'");
console.log(1 !== "2");


console.log("1 !== 1 gives "+(1 !== 1));
console.log("1 !== '1' give "+(1 !== "1"));
console.log("1 !== '2' gives "+(1 !== "2"));

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
cars.splice(0,1,"Toyota");
console.log(cars);

monTableau = [1992,'semifir', true, 10];
console.log(monTableau);
console.log(monTableau.join("*"));
*/


let monObjet = {
    nom : 'Woooah',
    age : 4,
    ready : true
};

console.log(Object.keys(monObjet));

for (const [key, value] of Object.entries(monObjet)) {
    console.log(`${key}: ${value}`);
    if (isNaN(value)) {
        console.log("nom c\est pas un nombre");
    } else {
        console.log("nom c'\est un nombre");
    }
  }
