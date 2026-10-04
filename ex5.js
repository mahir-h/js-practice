// Stretch: write octetToBinary(n) so that 10 returns "00001010". 
// Hint: use toString(2) and padStart.

function octetToBinary(n){
    const values = [128,64,32,16,8,4,2,1];
    let left = n;
    let bits = "";

    for (const v of values){
        if(v <= left){
            bits += "1";
            left -= v;
        }else{
            bits += "0";
        }
    }

    return bits;
}

//using toString(2) and padStart;

// const n = 10;
// const step1 = n.toString(2);
// const step2 = step1.padStart(8,"0");
// console.log(step2);

console.log(octetToBinary(192)); // "11000000"
console.log(octetToBinary(20));  // "00010100"
console.log(octetToBinary(0));   // "00000000"
console.log(octetToBinary(255)); // "11111111"