/* 
    0! = 1
    n! = n * (n-1)!
*/
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
    // unreachabke code for n = 0
}


let factArrow = (n) => (n === 0 ? 1 : n * factArrow(n - 1));
console.log('factorial (5)', factorial(5));
console.log('factorialArrow (5)', factArrow(5));
console.log ('5*4*3*2*1', 5 * 4 * 3 * 2 * 1);