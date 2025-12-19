//4. think of  a number bewtween 1 and 100, but dont tell this to the computer
// once the computer guesses a number based on the rules seen in exercise 3, 
// tell the computer if your number is greater than, less than, or equal to its guess.
// the comuter continues to guess until it gets the correct number.


let minValue = 1;
let maxValue = 100;

while (minValue < maxValue) {
    let midpoint = Math.floor((minValue + maxValue) / 2);
    let result =  null;
do { 
    prompt(
        Guess: ${midpoint}  'type h for higher, l for lower, and m for match');
} while (result !== "h" && result != "l" && result != "m");
}

switch (result) {
    case "h":
        minValue = midpoint + 1;
        console.log(
            `${midpoint} higher(interval: ${minValue} to ${maxValue})`);
        break;     
    case "l":
        maxValue = midpoint - 1;
        console.log(
            `${midpoint} lower(interval: ${minValue} to ${maxValue})`);
        break;  
    case "m":
        console.log(`Your number is ${midpoint}match`);
        minValue = maxValue = midpoint;
}


console.log(`Your number is ${minValue}match`);
