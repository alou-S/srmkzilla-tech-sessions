// Task 1 Arrow Fucntion
let snakeCase = string => string
        .replace(/W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(x => x.toLowerCase())
        .join('_');

// Task 1 Just a Function
function leet(number){
    if (number == 1337){
        console.log('LEET');
    }
    else{
       // do nothing
    }
}

console.log(snakeCase('Testing Snake case'));
leet(69);

//Task 2 Part 2
IsEven = require('./IsEven.js');
console.log(IsEven(1337));

