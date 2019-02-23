var jack = {
    name: 'Jack',
    age: 26,
    job: 'designer',
    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentelman! I\'m ' +
            this.name + ', i\'m a ' + this.job + ' and i\'m ' + this.age +
            ' years old.');
        } else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', i\'m a ' + 
            this.job + ' and i\'m ' + this.age + ' years old. Have a nice ' +
            timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'farmer'
};

//call method presentation on a object in which it has been called
jack.presentation('formal', 'morning');
//here calling method presentation on object jack, but call let's us use emily 
//so we can execute this function like we would normally do and get results but
//with data from emily object (which can not in normal circumstances use method
//presentation), this operation is called method borrowing and lets us set (with 
//method call) parameter this (from jack to emily)
jack.presentation.call(emily, 'friendly', 'evening');

//there is also apply method which is doing the same thing but expects array as 
//a second parameter (exmaple below), this will not work because our function 
//does not expect array as second parameter
//jack.presentation.call(emily, ['friendly', 'evening']);

//binding allows us also to set this variable explicitly (difference between it 
//and call is that bind does not immedietly call a function but instead creates 
//a copy of the function so it can be stored somewhere), here we are preseting 
//friendly variable (in later call we can omit this parameter (like below) and 
//all will work), this is called carrying (creating function based on another 
//function with some preset parameters)
var jackFriendly = jack.presentation.bind(jack, 'friendly');
jackFriendly('morning');
jackFriendly('afternoon');
//for emily we have to change this variable (so in function parameter we have to 
//pass emily object)
var emilyFormal = jack.presentation.bind(emily, 'formal');
emilyFormal('night');

var years = [1990, 1989, 2011, 2009, 1997];
function arrayCalc(arr, fn){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}
function calcAge(el){
    return 2019 - el;
}
function checkIfAdult(limit, el){
    return el >= 18;
}
//counting ages and creating an array from them
var ages = arrayCalc(years, calcAge);
//binding here we are setting age limit for people to be considered adult in 
//poland as a first parameter we pass just this (first parameter is required and 
//cannot be ommited so we pass just this because we don't need to change object 
//on which the function is beeing called)
var fullAgePoland = arrayCalc(ages, checkIfAdult.bind(this, 18));
//will print out in console colorized (orange) variable ages (array of variables)
console.log('%c ' + ages,'color:orange;');
//will set background color for console.log
console.log('%c' + fullAgePoland, 'background-color: orange;');
