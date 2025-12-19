let secretValue = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

// soultion 1 if else
if (secretValue === 0) {
    console.log('zero');
} else if (secretValue === 1) {
    console.log('one');
} else if (secretValue === 2) {
    console.log('two');
} else if (secretValue === 3) {
    console.log('three');
} else if (secretValue === 4) {

// solution2: switching 
switch (secretValue) {
   case 0:
       console.log('zero');
       break;      
           case 1:
        console.log('one');
        break;  
    default:
        console.log('other');
        break;
}

// solution3: dictionary
let dict = {
    0: 'zero',
    1: 'one',
    2: 'two',
}
console.log(dict[secretValue] || 'other');