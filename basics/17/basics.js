//closure gives a way of accesing variables of outer functions (here 
//variable a and ageOfRetirement) that cease to run (here after outer 
//function calcRetirement returned)
function calcRetirement(ageOfRetirement){
    var a = ' years more until retirement...';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((ageOfRetirement - age) + a);
    }
}
var calculatingPL = calcRetirement(65);
calculatingPL(1991);
//function calcRetirement can also be called like this
calcRetirement(88)(1991);

//function from folder 15 but written with closures (here using job variable
//after function interviewQuestions returns, in a subfunction)
function interviewQuestions(job){
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you explain what UX is?');
        }
        else if (job === 'teacher'){
            console.log(name + ', can you explain what PTSD is?');
        }
        else {
            console.log(name + ', what do you do?');
        }
    }
}
//this call returns a function and then we call this function with parameter of 
//name here Jake and then this execution context will close in over the variable 
//object (here job, but it can be more then one variable object) from the 
//function that we called before (here interviewQuestions), thats why we can use 
//job variable after orginal function has already returned
var personProfesion = interviewQuestions('teacher');
personProfesion('Jake');
personProfesion('Jonas');
var personProfesion2 = interviewQuestions('designer');
personProfesion2('Gabrielle');

//makeAdder is in fact function factory (we use such function to create
//new functions)
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}
//add1 and add2 are closures, they share the same function body definition, but 
//store different lexical environments (add1 x is 5 and in add2 x is 10)
var add1 = makeAdder(5);
var add2 = makeAdder(10);
console.log(add1(2));  // 7
console.log(add2(2)); // 12
//this can also be run in one line
console.log(makeAdder(1)(1));