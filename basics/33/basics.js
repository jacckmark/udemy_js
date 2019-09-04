//CLASSES

//ES5

//class in es5
var PersonES5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
//class method in es5
PersonES5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

//subclass in es5
var PersonES5Subclass = function(
    name,
    yearOfBirth,
    job,
    lastname,
    achievement
) {
    PersonES5.call(this, name, yearOfBirth, job);
    this.lastname = lastname;
    this.achievement = achievement;
};
PersonES5Subclass.prototype = Object.create(PersonES5.prototype);
//creating object using es5 constructor
var johnES5 = new PersonES5("JohnES5", 1990, "librarian");
console.log(johnES5);
johnES5.calculateAge();
//creating subclass in es5
var subJohnES5 = new PersonES5Subclass(
    "John",
    1998,
    "swimmer",
    "Baker",
    "best bread award"
);
console.log(subJohnES5);
subJohnES5.calculateAge();

//ES6

class PersonES6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    //methods that are static cannot be used with an object we call them like
    //nameOfClass.nameOfMethod()
    static greetingES6() {
        console.log("Hey bro!!!");
    }
}

let johnES6 = new PersonES5("JohnES6", 1987, "dictator");
console.log(johnES6);
johnES6.calculateAge();
//calling es6 static method
PersonES6.greetingES6();

//subclass definition in es6
class PersonES6Subclass extends PersonES5 {
    constructor(name, yearOfBirth, job, lastname, achievement) {
        //important to note is super keyword which is taking as a parameter all
        //constructor parameters that should be handled like in a superclass
        //(class we inherited from)
        super(name, yearOfBirth, job);
        this.lastname = lastname;
        this.achievement = achievement;
    }
}

let subJohnES6 = new PersonES6Subclass(
    "John",
    1987,
    "writer",
    "Writer",
    "best book award"
);
console.log(subJohnES6);
subJohnES6.calculateAge();
