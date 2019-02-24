// ARROW FUNCTIONS

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends1 = function(friends) {
    var arr = friends.map(function(el) {
        //name is not defined in global scope so it will return empty string,
        //because we called an anonymous function inside the function (this.name
        // will be available for use inside myFriends function but not inside
        //this anonymous one)
        return this.name + " is friends with " + el;
    });
    //if we write after enclosing curly bracket '.bind(this)' we will get it to
    //work, it is because we bind, available outside of the anonymous function,
    //this to the method so we can work not on global object but on object of
    //the Person class
    console.log(arr);
};
var friends = ["Jane", "Janice", "Kate", "Bob"];
new Person("John").myFriends1(friends);

//ES6
Person.prototype.myFriends2 = function(friends) {
    let arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};
let friends2 = ["Max", "Jenny", "Kate", "Tom"];
new Person("Peter").myFriends2(friends2);
