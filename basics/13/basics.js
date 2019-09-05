// First scoping example
var a = "Hello!";
first();
function first() {
    var b = "Hi!";
    second();
    function second() {
        var c = "Hey!";
        console.log(a + b + c);
        //we can access every single variable that is higher in scope chain and all
        //inside our own scope
    }
}
// Example to show the differece between execution stack and scope chain
var a = "Hello!";
first2();
function first2() {
    var b = "Hi!";
    second2();
    function second2() {
        var c = "Hey!";
        third2();
    }
}
function third2() {
    var d = "John";
    //c is not available here (in this function we can access only variables from
    //our scope (inside function), next scope or in global scope, but not variables
    //inside another functions (other scope) in this example here you cannot access
    //b or c)
    //console.log(c);
    console.log(a + d);
}
