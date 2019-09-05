//object literal
var john = {
    name: "John",
    yearOfBirth: 1991,
    job: "teacher"
};

//function constructor (blueprint) (always write with capital letter) (this can
//be also written in a way 'function Person (parameter, parameter2)...')
var Person = function(name, yearOfBirth, job) {
    //pass parameters of the function as values for object properties
    //(this.name_of_property)
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //we can give to all objects function calculateAge (all objects created with
    //Person constructor will be able to see and use it), but it is not efficent
    //way of doing it especially if we have a lot of methods we should use
    //prototypes
    // this.calculateAge = function(){
    //     console.log(2019 - this.yearOfBirth);
    // }
};

//attaching method to constructor function prototype property
Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

//attaching properties to constructor function prototype property is also possible
//but not so common
Person.prototype.lastName = "Smith";

//instantiantion (these objects are instances of Person object)
//when we use new operator empty object (new empty object) is beeing created,
//then constructor function is called with parameters that we provide, if the
//constructor does not return anything then the result is the object that was
//created
var johnBro = new Person("John", 1994, "clerk");
var jane = new Person("Jane", 1982, "designer");
var mark = new Person("Mark", 1999, "programmer");
//these information can also be obtained if you write in chrome console name of
//your object (you dont have to do a console.log), also in console we can log
//Person.prototype which will return all data stored in a typical prototype of
//Person object (all names of variables and functions but no actual data)
console.log(john);
console.log(johnBro);
console.log(jane);
//working similar to console.log
console.info(mark);
johnBro.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(johnBro.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
//check if john object has job property
console.log(john.hasOwnProperty("job"));
//check if john is instance of Person class (if john is created with Person
//constructor)
console.log(john instanceof Person);
console.log(mark instanceof Person);

//there is also another way of creating objects Object.create
//prototype (not a constructor no need to use capital letter)
var personProto = {
    calculateAge2: function() {
        console.log(2019 - this.yearOfBirth);
    }
};
//difference between Object.create and function constructor is that this method
//builds object that inherites directly from the one that we passed as first
//argument (here personProto) while in function constructor objet inherites from
//the constructors prototype property (when we need to implement complex
//inheritance Object.create is the way to do it (gives us a way of direct specyfiing
//which object should be a prototype)), this does not change a fact that function
//constructor is the most used solution when creating objects
var john2 = Object.create(personProto);
john2.name = "John2";
john2.yearOfBirth = 1899;
john2.job = "teacher";
//another way of creating object with create
var jane2 = Object.create(personProto, {
    name: { value: "Jane2" },
    yearOfBirth: { value: 1990 },
    job: { value: "clerk" }
});
console.log(john2);
console.log(jane2);

function Subperson(name, yearOfBirth, job, superpower) {
    //to create class inheriting from another class just pass arguments to call
    //function which has been runned on superclass (here Person), beware first
    //parameter should always be this or object on which we are doing a call
    Person.call(this, name, yearOfBirth, job);
    //rest of the Subperson parameters
    this.superpower = superpower;
}
//the process of creating new instance of subclass looks the same
var igor = new Subperson("Igor", "1880", "caretaker", "smelly breath");
console.log(igor);

//variables holding primitives (string, numbers, booleans, undefined, null) hold
//data inside variable itself, on the other hand objects contain just a refrence
//of where these information are beeing stored
var a = 22;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //22
//this example shows that variables with primitives holds only their own copy of
//data thats why assigning a to b and changing a does not affect b
var obj1 = {
    name: "John",
    age: 11
};
var obj2 = obj1;
obj1.age = 33;
console.log(obj1.age); //33
console.log(obj2.age); //33
//changing one of the values of object assigned to another object affects both
//objects (age in obj1 and obj2 will change (obj1 and obj2 point to the same
//place in memory))
//example showing the difference between primitives and objects but in function
var age = 100;
var obj3 = {
    name: "Joonas",
    city: "Berlin"
};
function change(a, b) {
    a = 23;
    b.city = "Los Angeles";
}
//no changes will be made to primitive a
//city will be changed to Los Angeles
change(age, obj3.city);
console.log(age);
console.log(obj3.city);
