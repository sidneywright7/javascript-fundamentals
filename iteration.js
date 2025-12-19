let list = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

let i = 0

//while loop is used to iterate over the list
while (i < list.length) {
    console.log(list[i]);
   i = i +1;
}


// the increment operation `i = i + 1;` is used to move to the next element in the list. 
// Without this increment, the loop would run indefinitely, as `i` would always be less 
// than `list.length`. This is a common pattern in loops to ensure that the loop variable 
// progresses towards the termination condition. THIS IS EXTREMELY IMPORTANT FOR AVOIDING
//  INFINITE LOOPS.

//another loop is for (initialization; condition; increment/decrement) {body_statements;}
for (ley i = 0; i < list.length; i++) {
    console.log(list[i]);
}

//third loop is (for..in loop) is used to iterate over the keys of an object or the indices 
// of an array.
for (let i in list) {
    console.log(list[i]);
}


//fourth loop is (for..of loop) is used to iterate over the values of an array or other 
// iterable objects.
for (let day of list) {
    console.log(day);
}   


//do while loop is used to execute a block of code at least once before checking the condition.
let userInput = null;
do {
    userInput = prompt("Enter a number between 1 and 10:");
} while (userInput === null || userInput.length === 0;
console.log("You entered: " + userInput);   

// !(A && B) is a logical AND operation, which returns true if both A and B are true. 
// In this context, it ensures that the loop continues to prompt the user until a non-empty
// input is provided.
