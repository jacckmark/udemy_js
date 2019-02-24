// WORKING WITH STRINGS

// ES5
var firstName1 = "John";
var lastName1 = "Smith";
var yearOfBirth1 = 1998;

function calcAge1(year) {
    return 2019 - year;
}
console.log(
    "%c%s",
    "color: #00e600",
    "This is " +
        firstName1 +
        " " +
        lastName1 +
        ". He is " +
        calcAge1(yearOfBirth1) +
        " years old."
);

// ES6
let firstName2 = "Janice";
let lastName2 = "Magenta";
const yearOfBirth2 = 1981;

function calcAge2(year) {
    return 2019 - year;
}
console.log(
    "%c%s",
    "color: #00a3cc",
    `This is ${firstName2} ${lastName2}. She is ${calcAge2(
        yearOfBirth2
    )} years old.`
);
//in es6 we can use temaplate literals, which means that we can access diferent
//variables and concatenate them without need to use plus signs etc., one thing
//to pay attention to is that whole expression is in backticks not apostrphes or
//quotation marks

const n = `${firstName2} ${lastName2}`;
//check if string starts with character (beware it is case sensitive function)
console.log("%c%s", "color: #aa00ff", n.startsWith("J"));
//check if string ends with character
console.log("%c%s", "color: #e50000", n.endsWith("s"));
//check if string includes some character (here empty space)
console.log("%c%s", "color: #733d00", n.includes(" "));
//repeat string few times
console.log('%c%s', 'color: #00bf00', `${firstName2}`.repeat(3));


