/*Add function, remove func, done func, clear-all funct, 
print funct, displays messages upon funct request, takes 
input from user, (action, day) stores it in diff arrays*/

// Import prompt
const prompt = require('prompt-sync')();

// Import Date/time


/*Allows people to enter by entering correct
UserID and Password*/

let user = prompt('Jeeves -- Enter UserID:');
let pass = prompt('Jeeves -- Enter Password:');

function passUser() {
    if (user=="jjmck") { 
    if (pass=="password") {              
        console.log("\nCorrect UserID/Password");
    } else {
        console.log("\nInvalid Password");
        return process.exit();         
    } } else {  
        console.log("\nInvalid UserID");
        return process.exit();
    }
}

passUser();

// Arrays
const sun = ['sunday'];
const mon = ['monday'];
const tues = ['tuesday'];
const wed = ['wednesday'];
const thurs = ['thursday'];
const fri = ['friday'];
const sat = ['saturday'];

const days = [sun, mon, tues, wed, thurs, fri, sat];

// needs work, each should apply command to a given array.
// use indexOf, |, substring to separate words within string
// first word goes to that array, also use a char to indicate which array
// -todo, _day, perhaps space would work too.
console.log('\n1.\) add <todo> <day>');
console.log('2.\) remove <todo> <day>');
console.log('3.\) print schedule');
console.log('4.\) exit\n');
const action = prompt('What would you like to do?');

// garbage sorting function
function sort(str1, str2, str3) {
    if (str1 == 'add') {
        addToDo(str2, str3);
    } else if (str1 == 'remove') {
        removeToDo(str1, str2);
    } else {
        console.log('must be another function');
    }
}


for (let i = 0; i < action.length; i++) {
    if (action.charAt(i) === ' ') {
        console.log('There is a space at index ' + i);
    }
}


// create a add todo function, takes 2 args (todo, day)
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

sort('add run day');
// addToDo('walk dog', wed);
// addToDo('eat food', fri);
// removeToDo('walk dog', wed);

// console.log(days);
// console.log(typeof sun);

// Print function, takes 1+ args
// const print = console.log(days);
// print;

