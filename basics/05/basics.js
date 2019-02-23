//two ways of creating a function (regular function and function expression), the difference
//beetween the two is that function expression will be defined when line of code containing it
//will get reached and the reular function can be called as soon when file containing the definition
//is beeing executed (you can call it in lines before actual execution), the another difference is that
//you can not conditionaly define function (regular function) and can conditionaly define function 
//expression
function myExampleFunction(job, firstname){
    return "Your job is " + job + " and your name is " + firstname + "(function declaration)!";
}
var myFunction = function(job, firstname){
    return "Your job is " + job + " and your name is " + firstname + "(function expression)!";
}
console.log(myExampleFunction("teacher", "Julian"));
console.log(myFunction("builder", "Mark"));

//different ways of arrays defining
var jobs = ["teacher", "sailor", "businessman", "waiter"];
var names = new Array("Jack", "Mark", "Max", "Jessica");
console.log(jobs);
//array lenght
console.log(names.length);
console.log(names[3]);
//changing array element value
jobs[1] = "no job for you";
console.log(jobs[1]);
//array with different variables (elements) in it
var james = ["John", "Mackenzie", 1991, 178, 99, "teacher"];
//array add element on the end of the array
james.push("newValue");
//add element on the beggining of the array
james.unshift("newValue2");
console.log(james);
//remove value from the end of the array
james.pop();
//remove value from the beggining of the array
james.shift();
console.log(james);
console.log("Word teacher is on the position " + james.indexOf("teacher") + " in the array james!");
//if value of method indexOf is equal -1 then it means that this string, int etc.(value) does not appear in given array
var hasValue = james.indexOf("newValue") === -1 ? 'Array james does not have a value \'newValue\'' :
'Array james have a value \'newValue\'';
console.log(hasValue);