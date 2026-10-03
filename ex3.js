// Scope detective: put a variable inside an if block and try to log it outside the block, then outside the function. 
// Write a one-line comment explaining each error.

function isOdd(n){
    if (n % 2 !== 0){
        let v = n;
        // console.log(v);
        // return `Its odd`;
    }
    // console.log(v + "is a number");
}
console.log(v + "is a number");
console.log(isOdd(3));

// If I log the variable outside the if block and also outside the function, it throws an error saying the variable is not defined. Because it is not a global variable. 