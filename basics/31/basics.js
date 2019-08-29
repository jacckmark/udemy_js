//DEFAULT PARAMETERS

//ES5

function SmithPerson1(firstName, yearOfBirth, lastName, nationality) {
    //in es5 if we would like to decide inside a constructor what type of
    //values should be assigned to parameters we would have to do some
    //if else and asssing these values inside function
    lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
    nationality === undefined
        ? (nationality = "american")
        : (nationality = nationality);
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

//john's name will be Smith and he is american nationality
var john1 = new SmithPerson1("John", 1998);
//emily has all the parameters defined
var emily1 = new SmithPerson1("Emily", 1992, "Krasicka", "spanish");
console.log(john1);
console.log(emily1);

//ES6

//in es6 we don't have to do a tedious values checking and we can assing default
//values right in the function parameters definition
function SmithPerson2(
    firstName,
    yearOfBirth,
    lastName = "Smith",
    nationality = "american"
) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john2 = new SmithPerson2("John", 1998);
var emily2 = new SmithPerson2("Emily", 1992, "Krasicka", "spanish");
console.log(john2);
console.log(emily2);
