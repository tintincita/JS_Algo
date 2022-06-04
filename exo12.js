let t = [19, 39, 3, -4, -19];

/*
for (i = 0 ; i<t.length; i++) {
    (t[i] >= 0 ? tAbs[i] = t[i] : tAbs[i] = - t[i])
}
*/
console.log(tAbs);
// adapted from exo04


let result = t[0];

for (i=0; i<t.length-1; i++) {
    let possibleResult ;

    (tAbs[i]< tAbs[i+1]? possibleResult = tAbs[i] : possibleResult = tAbs[i+1]);
    (result < possibleResult ? result = result : result = possibleResult);
}

console.log(result);