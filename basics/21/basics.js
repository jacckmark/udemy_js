//LET AND CONST

//ES5
var name1 = "James Smith";
var age1 = 89;
name1 = "Jane Smith";
age1 = age1 - 10;
console.log("%c%s", "color: #eb6206", name1);
console.log("%c%s", "color: #00e600", age1);

function driversLicense(passTest) {
    //when printing variable that is not yet declared, this variable will store
    //undefined (hoisting)
    console.log(firstName);
    if (passTest) {
        var firstName = "John";
        var yearOfBirth = 1999;
        console.log(
            "%c%s",
            "color: #e50000",
            "The name of this driver is " +
                firstName +
                " and he was born in " +
                yearOfBirth
        );
    }
    //var are function scoped (we can use variables declared inside a function
    //ifelse outside of it)
    console.log("%c%s", "color: #00bf00", firstName);
}
driversLicense(true);

//variable i1 is mutable from outside we can change it inside an for and if we
//will console log it outside it will hold the value assigned inside (function,
//expression etc.)
var i1 = 22;
for (var i1 = 0; i1 < 5; i1++) {
    console.log("%c%s", "color: #0088cc", i1);
}
console.log("%c%s", "color: #917399", i1);


//ES6
//const for variables that should be immutable (constant value)
const name2 = "Jim Door";
//let is used like a var (in ES6 we dont use var anymore)
let age2 = 23;
//this simply cannot be done we will get an error
//name2 = 'Janice Door';
age2 = age2 + 3;
console.log("%c%s", "color: #00a3cc", name2);
console.log("%c%s", "color: #aa00ff", age2);

function driversLicense2(passTest) {
    //when calling a variable that is not yet declared we will get an error
    //(this is because something called temporar dead zone, this means that
    //variables are hoisted like in es5 but you still cannot use them before
    //they are not defined, this prevents some major problems with variables
    //code below will not work
    //console.log(firstName2);
    if (passTest) {
        let firstName2 = "John";
        const yearOfBirth2 = 1999;
        console.log(
            "%c%s",
            "color: #e50000",
            "The name of this driver is " +
                firstName2 +
                " and he was born in " +
                yearOfBirth2
        );
    }
    //let and const are block scoped so we can access them ony inside scope
    //(like in regular programming languages (java)), so variables declared
    //inside ifelse are only accessible inside this ifelse not outside of it,
    //thats why code below will return an error (workaround for it is to
    //declare let and const outside of the block (before ifelse), but beware
    //that you cannot instantiate const later on(the value is constant so if
    //you just declare it it will be undefined forever))
    //console.log(firstName2);
}
driversLicense2(true);

//here we can change a i2 value inside for but it will not be changed globally
//so when we will print value outside of a block we will get 22 (not 5 like
//like with var), we say that i2 variable outside block and inside it are
//completly different variables (they have the same name but are completly
//different)
let i2 = 22;
for (let i2 = 0; i2 < 5; i2++) {
    console.log("%c%s", "color: #0088cc", i2);
}
console.log("%c%s", "color: #917399", i2);