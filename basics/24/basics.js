// ARROW FUNCTIONS

// ES5
var years1 = [1990, 1994, 1889, 1992];
//in es5 we would use callback function and map to do some work on every single 
//element in whole array
var ages1 = years1.map(function(el) {
    return 2019 - el;
});
console.log(ages1);

// ES6
const years2 = [1990, 1994, 1889, 1992];
//in es6 we can use arrow function (we don't have to use callback functions), in
//this example el (before arrow) is the argument, then we have the arrow and our
//return is after (operation of calculating ages)
let ages2 = years2.map(el => 2019 - el);
console.log(ages2);

//here arrow function with two parameters (we have to place them in the
//parenthesis)
ages2 = years2.map((el, index) => `Age element ${index + 1} : ${2019 - el}.`);
console.log(ages2);

//we can also close whole expression inside curly brackets (when we have more 
//than one line of code)
ages2 = years2.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now -el;
    return `Age element ${index + 1} : ${age}.`
});
console.log(ages2);

