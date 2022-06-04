// randomly generated N = 10 length array 0 <= A[N] <= 20
let Notes = Array.from({length: 10}, () => Math.floor(Math.random() * 20));

console.log(Notes);

let Commentaires = [];

for (i = 0; i < Notes.length; i++){

    if (Notes[i]<5) {
        Commentaires[i] = "Catastrophique";
    } else if (Notes[i] < 11) {
        Commentaires[i] = "Insufissant";
    } else if (Notes[i] < 15) {
        Commentaires[i] = "Peut mieux faire";
    } else if (Notes[i] < 18) {
        Commentaires[i] = "Bien";
    } else {
        Commentaires[i] = "Excellent";
    }
}
console.log(Commentaires);