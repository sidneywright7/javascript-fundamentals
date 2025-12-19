let list = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

let i = 0
while (i < list.length) {
    console.log(list[i]);
   i = i +1;
}


// the increment operation `i = i + 1;` is used to move to the next element in the list. 
// Without this increment, the loop would run indefinitely, as `i` would always be less 
// than `list.length`. This is a common pattern in loops to ensure that the loop variable 
// progresses towards the termination condition. THIS IS EXTREMELY IMPORTANT FOR AVOIDING
//  INFINITE LOOPS.

