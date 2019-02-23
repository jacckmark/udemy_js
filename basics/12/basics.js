// hoisting will work here (method calculateAge can be used before declaration)
calculateAge(1965);
function calculateAge(year) {
   console.log(2016 - year);
}
// retirement(1956);
// this will not work because hoisting does not work on function expressions
var retirement = function(year) {
   console.log(65 - (2016 - year));
}

// variables
//hoisting in variables means that variable gets declared before actuall declaration
//in code, but don't get defined (will return undefined)
console.log(age);
var age = 23;
function foo() {
   //each function gets its own execution context and thats why variable age printed in
   //this console log will result in undefined (variable in line 16 is in different scope)
   console.log(age);
   var age = 65;
   //printed value will be 65 (different scope so variable with value 23 is not available)
   console.log(age);
}
foo();
//value of this age will be 23 (different scope)
console.log(age);
