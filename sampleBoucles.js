let monObject = {
    'number' : 2
}

let monListe = [1,"hair", true, 9, "Caramba"];

console.log(`mon liste est ${monListe}`);
console.log("for - in shows index:")
for (let element in monListe) {
    console.log(element);
}
console.log("for - of shows content:")
for (let element of monListe) {
    console.log(element);
}

