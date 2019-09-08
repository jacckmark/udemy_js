var years = [1990, 1989, 2011, 2009, 1997];

//function to which we can pass another function (callback function)
function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

//callback functions (later passed as parameters to function arrayCalc)
//they are named that because they are functions passed to a another
//functions that will call them later
function calcAge(el) {
    return 2019 - el;
}
function checkIfAdult(el) {
    return el >= 18;
}

var ages = arrayCalc(years, calcAge);
var adulthood = arrayCalc(ages, checkIfAdult);
console.log(ages);
console.log(adulthood);

//function returning another function
function interviewQuestion(job) {
    if (job === "designer") {
        //anonymous function (function without a name)
        return function(name) {
            console.log(name + ", can you explain what UX is?");
        };
    } else if (job === "teacher") {
        return function(name) {
            console.log(name + ", can you explain what PTSD is?");
        };
    } else {
        return function(name) {
            console.log(name + ", what do you do?");
        };
    }
}
//creating a variable with assigned function (parameter teacher passed)
var teacherQuestion = interviewQuestion("teacher");
//caling a variable (which is right now a function) and passing name argument
teacherQuestion("Dick");
var designerQuestion = interviewQuestion("designer");
designerQuestion("Janice");
//default function return when you do not provide a job parameter
var dudeQuestion = interviewQuestion();
dudeQuestion("Jack");
//calling both functions (main one and anonymous, returned one) in one line
interviewQuestion("designer")("Julian");

//callback function used to modify list
var list = [1, 2, 3, 4, 5, 6];
function callbackExample(someList) {
    var newList = [];
    for (var i = 0; i < someList.length; i++) {
        if (someList[i] > 2) newList.push(someList[i] * 2);
    }
    return newList;
}

function filterFunc(someList, callbackFun) {
    //here callback is used to call another function with parameter of given
    //list
    return callbackFun(someList);
}

//we call two functions in one line (second one callbackExample is beeing called
//by function filterFunc)
var filtered = filterFunc(list, callbackExample);
console.log(filtered);
