//objects are stored in variables like arrays (two ways of creating object)
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1999,
    family: ["Jane", "Mary", "Teddy", "Emily"],
    job: "teacher",
    isMarried: "false",
    calcAge: function() {
        //"this" keyword means here current object so we are calling variable
        //birthYear in object john (our current object)
        this.age = 2019 - this.birthYear;
    }
};
var jane = new Object();
jane.firstName = "Jane";
jane.lastName = "Smith";
jane.birthYear = 1990;
//print whole object
console.log(john);
//print one variable of an object (two ways)
console.log(john.firstName);
console.log(john["firstName"]);
//change value of johns job
john.job = "designer";
//function calcAge needs to be called to set value of age to johns age then
//and only then a value will get assainged
john.calcAge();
console.log(jane);
console.log(john);
