// Enumerate all data types learned. For each data type, create a variable of that type and result. 

let SUM = (a, b) => a + b;
let dict = {
    'apple': 'A fruit',
    'car': 'A vehicle', 
};
let list = [monday, tuesday, wednesday];
let mySet = new Set(list);
let myMap = new Map([apple, 'A fruit'], [car, 'A vehicle']);


let num = 42;
let str = 'abc';
let bool = false;
let undef = dict['nonexistent']; //usually not explicitly assigned
let nullValue = null; 
let bigNum = 5n
let mySymbol = Symbol('test');

console.log(
    // Reference Datatypes:
    `${SUM}: ${typeof SUM}`
    `${dict}: ${typeof dict}` 
    `${list}: ${typeof list}`
    `${mySet}: ${typeof mySet}`
    `${myMap}: ${typeof myMap}`

    // Value , Atomic Datatypes: 
    `${num}: ${typeof num}`
    `${str}: ${typeof str}`
    `${bool}: ${typeof bool}`
    `${undef}: ${typeof undef}`
    `${nullValue}: ${typeof nullValue}`
    `${bigNum}: ${typeof bigNum}`
    `${String(mySymbol)}: ${typeof mySymbol}`
);