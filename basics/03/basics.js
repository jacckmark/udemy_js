var firstName = "Jack";
var lastName = "Smith";
var age = 91;
var status = "rich";
var job = "teacher";

//will check if firstName is poor and also if firstName is the same type as 
//the value with which we are compairng
if (firstName === "poor"){
    console.log(firstName + " is poor!");
}
else {
    console.log(firstName + " will propably be poor soon!")
}

if (age <= 13){
    console.log(firstName + " " + lastName + " is a boy!(if else)");
}
else if (age > 13 && age <= 20 ){
    console.log(firstName + " " + lastName + " is a small adult!(if else)")
}
else if (age > 20 && age <= 90){
    console.log(firstName + " " + lastName + " is old man!(if else)")
}
else{
    console.log(firstName + " " + lastName + " is undead!(if else)")
}

//tenary operator works like if else where part after "?" will be executed
//when condition is true, or code after ":" will be executed when false (here 
//assaigning value to drink variable)
var drink = age >= 18 ? "He can drink" : "He can not drink yet";
console.log(drink);

//switch statement remember to use break on the end of every single case, and
//also to put a default clause if our condition does not match any of the cases
switch (job){
    case "driver" :
    console.log(firstName + " is a driver!");
    break;
    case "bro" :
    console.log(firstName + " is a bro!");
    break;
    case "teacher" :
    console.log(firstName + " is a teacher!");
    break;
    default :
    console.log(firstName + " is doing something else for living!");
}

//if you want to compare numbers in switch statement you have to give in parameter
//of a switch true and then in all cases provide conditions like in if else
switch (true){
    case age <= 13 :
    console.log("It is young boy!(switch)");
    break;
    case age > 13 :
    console.log("It is young adultto!(switch)");
    break;
    default :
    console.log("He is a monster!(switch)");
}

//falsy values are values that will be converted to false when evaluating in 
//conditions (comparing in if else etc.) and truthy will not return false by
//default like falsy 
//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

//undefined
//var number;
var number = 0;
if (number || number === 0){
    console.log("Variable 'number' is defined!")
}
else{
    console.log("Variable 'number' is not defined!")
}