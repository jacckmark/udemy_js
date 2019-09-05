//shows content of window object
console.log(this);

calcAge(2001);

function calcAge(year) {
    console.log(2010 - year);
    //shows content of window object
    console.log(this);
}

var john = {
    name: "Jack",
    yearOfBirth: 1991,
    calcAge2: function() {
        //will point to john object
        console.log(this);
        console.log(2010 - this.yearOfBirth);

        function innerFunction() {
            //will point to default (window) because only methods of an object
            //are pointing to object inside which they are beeing called (not
            //the functions)
            console.log(this);
        }
        innerFunction();
    }
};

john.calcAge2();
