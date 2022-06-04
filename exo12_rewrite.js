let t = [19, 39, -4, -19];

// based on exo04 : alain algorithm
function smallestOfList (n=[]){

    let result;
    for (i=0; i<(n.length-1); i++) {
        let possibleResult;
        (n[i]< n[i+1]? possibleResult = n[i] : possibleResult = n[i+1]);
        (result < possibleResult ? result = result : result = possibleResult);
    }
    return(result)
}


// separate array into positives and negatives
let tPos = [];
let tNeg = [];
for (let i of t) {
    (i > 0 ? tPos.push(i) : tNeg.push(-i));
}

let tPosMin = smallestOfList(tPos);
let tNegMin = smallestOfList(tNeg);

(tPosMin < tNegMin ? result = tPosMin : result = - tNegMin);



console.log(result);
// mystery: result only declared inside function yet it can be used outside.