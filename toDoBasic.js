/*Add function, remove func, done func, clear-all funct, 
print funct, displays messages upon funct request, takes 
input from user, (action, day) stores it in diff arrays*/


// Import prompt
const prompt = require('prompt-sync')();
console.log(' ');

// Import Date/time
var moment = require('moment');
var a = moment().toString();
console.log(a);

/*Allows people to enter by entering correct
UserID and Password - it works just commented out*/

// let user = prompt('Jeeves -- Enter UserID:');
// let pass = prompt('Jeeves -- Enter Password:');

// function passUser() {
//     if (user=="jjmck") { 
//     if (pass=="password") {              
//         console.log("\nCorrect UserID/Password");
//     } else {
//         console.log("\nInvalid Password");
//         return process.exit();         
//     } } else {  
//         console.log("\nInvalid UserID");
//         return process.exit();
//     }
// }
// passUser();

// Arrays
let sun = ['sunday', 'a', 'b', 'c'];
let mon = ['monday', 'a', 'b', 'c'];
let tues = ['tuesday', 'a', 'b', 'c'];
let wed = ['wednesday'];
let thurs = ['thursday'];
let fri = ['friday'];
let sat = ['saturday'];

let days = [sun, mon, tues, wed, thurs, fri, sat];


console.log('\n1.\) add <todo> <day>');
console.log('2.\) remove <todo> <day>');
console.log('3.\) print schd');
console.log('4.\) exit\n');
let action = prompt('What would you like to do?');

// use split() method to separate user input string into an array of substrings
let actionArray = action.split(' ');
console.log(actionArray);

// create an addToDo function that takes 2 args (todo, day)
function addToDo(todo, day) {
    // loop over days
    for (let i = 0; i < days.length; i++) {
        // if input day is equal to day in days array 
        if (days[i] == day) {
            // update day array with .push with the todo string
            day.push(todo);
        }
    }
}

// RemoveToDo function, takes 2 args (todo, day), .pop removes
function removeToDo(todo, day) {   
    // loop over days
    for (let i = 0; i < days.length; i++) {
        // if input day is equal to days array
        if (days[i] == day) {
            // remove todo from day array
            day.pop(todo);
        }
    }
} 

// hard coded sorting loop
// for loop is adding for every item in array I only want once

    if (actionArray[0] == 'add') {
        addToDo(actionArray[1], actionArray[2]);
    } else if (actionArray[0] == 'remove') {
        removeToDo(actionArray[1], mon);
    } else if (actionArray[0] == 'print') {
        console.log(days);
    } else if (actionArray[0] == 'exit') {
        return process.exit();
    } else {
        console.log('Syntax Error. You need to type commands as shown.');
    }


// sort('add run day');
// addToDo('walk dog', wed);
// addToDo('eat food', fri);
// removeToDo('walk dog', wed);

console.log(action.length);
console.log(days);

// Print function, takes 1+ args
// const print = console.log(days);
// print;

