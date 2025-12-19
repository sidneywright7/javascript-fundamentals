//2. ask the user to enter an integer between 1 and 100. valiade you input
// and repeat asking the suer for this input until a valid integer is entered.

let intValue = null;
do {
let value = prompt ("Please enter an integer between 1 and 100:");
let intValue = Number.parseInt(value);
} while (
    Number.isNaN(intValue) ||
    typeof intValue !== 'number' ||
    intValue < 1 || intValue > 100
);

console.log("You entered: " + intValue);

