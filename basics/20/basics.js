//module pattern in js is in fact built with IIFE (they are good for hiding your
//content like variables etc.), inside our function we put return which will be
//available for outside world (here return with function publicTest), thanks to
//closures publicTest has all information about variables in our IIFE (like
//variable x etc.)
var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    };
    return {
        publicTest: function(b) {
            return add(b);
        }
    };
})();
//to check if our methods/variables are available for pulic use we can do a
//simple test in browser console by simply running "budgetController.x" or
//"budgetController.publicTest(11)" (the first one should return undefined or
//error, second one should return value returned by function)

var UIController = (function() {
    //some code
})();

//controller is created in mind to speak with UIController and budgetController
//thats why we pass this variables as parameters for cotroller method (IIFE)
var controller = (function(budgetContr, UIContr) {
    var z = budgetContr.publicTest(16);

    return {
        anotherPublic: function() {
            console.log("%c%s", "color: #00e600", z);
            // you can get undefined here when running this method from the 
            // console switching it to return z should resolve this problem
        }
    };
})(budgetController, UIController);
//here we are using also something called separation of concerns, which means
//that each part of the application should only be interested in doind one thing
//independly (here controller, UI and budget controller don't know about each
//other, only controller knows something about the other two (because we passed
//them as paramters))
