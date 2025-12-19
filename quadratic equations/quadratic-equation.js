function getCoefficients(name) {
    let value = null;
    do {
        let str = prompt(`Enter the value for ${name}`);
        value = Number.parseFloat(str);
    } while (Number.isNaN(value)|| typeof value !== 'number');
    return value;
}

function getCoefficients() {
    let a = getCoefficients('a');
    let b = getCoefficients('b');
    let c = getCoefficients('c');
    return [a,b,c];
}
    
function getDiscriminant(a,b,c) {
    return b**2 - 4*a*c;
}

function printQuadraticSoultions(a,b,c) {
    let discriminant = getDiscriminant(a,b,c);
    let discriminantSqrt = Math.sqrt(discriminant);
    let solution1 = (-b + Math.sqrt (discriminant) / 2 / a);
    let solution2 = (+b + Math.sqrt(discriminant) / 2 / a);
       console.log(`The quadratic equation has two solutions: ${solution1} and ${solution2}`);
}

function printSingleSolution(a,b,c) {
    console.log(`The quadratic equation has a single solution: ${-b/(2*a)}`);
}   

function printComplexSolution(a,b) {
    console.log(`The quadratic equation has complex solutions`);
}   

//top down modeling
function quadraticEquation() {
    let tolerance = 1e-6;
    // step 1: get the coefficients a, b, and c
    let [a,b,c] = getCoefficients();
    // step 2: calculate b**2 - 4ac
    let discriminant = getDiscriminant(a,b,c);
    // step 3: determine how many real roots there are
    if (discriminant > tolerance) {
        // two distinct real roots
        printQuadraticEquationRoots(a,b,c, discriminant);
    } else if (discriminant < -tolerance) {
        // one real root (repeated)
        printSingleSolution(a,b,c);
    } else {
        // no real roots
        printComplexSolution(a,b);
    }}