//DESTRUCTURING

//ES5
//destructuring data structure in ES5 would be done by hand (like bolove), we
//would have to create new variables and point to right elements of for example
//array
var john1 = ["John", 26];
var name1 = john1[0];
var age1 = john1[1];
console.log(name1);
console.log(age1);

//ES6
//to destructure an array we have to pass variables names (anything will work),
//and after the equal sign we pass an array (order matters, so first parameter
//will be mapped to first elemenent in the array)
const [name2, year2] = ["Bob", 29];
console.log(name2);
console.log(year2);

//when destructuring an objects we pass our property names (they must match with
//property names in actual object) in curly barackets
const obj = {
    firstName: "Jack",
    lastName: "Manik"
};
const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

//we can also give our property names new names (so firstName of object obj will
//be called from now on a)
const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

//we can also use destructuring to process return from a function (here we are 
//returning an array and in the next lines we are destructuring it into two
//different variables)
function calcAgeOfRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirement2] = calcAgeOfRetirement(1990);
console.log(age2);
console.log(retirement2);
