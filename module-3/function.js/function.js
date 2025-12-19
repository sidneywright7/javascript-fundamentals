// 3. extend exercise 2. create algorithm that guesses the number entered
// by the user optimally such that we always exclude at least half of the 
// available numbers in the domain 1 to 100. In each step, console log the guess 
// and console log whether the number to be guessed is greater than, less than,
// or equal to the guessed number. 

function getInput() {
    let intValue = null;
do {
let value = prompt ("Please enter an integer between 1 and 100:");
let intValue = Number.parseInt(value);
} while (
    Number.isNaN(intValue) ||
    typeof intValue !== 'number' ||
    intValue < 1 || intValue > 100
);
return intValue;
}   

function printResult(mid, direction, min, max) {
    console.log(`Guess: ${mid}`);
    console.log(`Interval: ${min} to ${max}`);
}

function guessThNumber() {
    let intValue = getInput();
    let minValue = 1;
    let maxValue = 100;

while (minValue < maxValue) {
    let midpoint = Math.floor((minValue + maxValue) / 2);
    if (intValue === midpoint) {
        console.log(`Your number is ${midpoint}match`);
        minValue = maxValue = midpoint;
    } else if (intValue < midpoint) {
        maxValue = midpoint - 1;
        printResult(midpoint, "lower", minValue, maxValue);
    } else if (intValue > midpoint) {
        minValue = midpoint + 1;
        console.log(
            printResult(midpoint, "higher", minValue, maxValue)
    }
}
console.log(`Your number is ${minValue}match`);
