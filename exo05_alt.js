// randomly generated N = 10 length array 0 <= A[N] <= 20
let Notes = Array.from({length: 10}, () => Math.floor(Math.random() * 20));

console.log(Notes);

let Commentaires = [];

for (i = 0; i < Notes.length; i++){
    switch (true){
        case (Notes[i]<5): 
            Commentaires[i] = Notes[i] + ": Catastrophique";
            break;
        case Notes[i] < 11:
            Commentaires[i] = Notes[i] + ": Insufissant";
            break;
        case Notes[i] < 15:
            Commentaires[i] = Notes[i] + ": Peut mieux faire";
            break;
        case Notes[i] < 18:
            Commentaires[i] = Notes[i] + ": Bien";
            break;
        case Notes[i]<21:
            Commentaires[i] = Notes[i] + ": Excellent";
            break;
        
        }
    }

console.log(Commentaires);