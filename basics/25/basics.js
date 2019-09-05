// ARROW FUNCTIONS

//ES5
var box5 = {
    color: "green",
    position: 1,
    clickMe: function() {
        //function below is not a method it is a function call and that's why
        //you will get undefined (function call points to global window object
        //and there is no posiotion etc.),
        var self = this;
        //the workaround is to create the variale pointing to this (usually
        //called that or self) and then we can use below this keyword stored
        //inside our variable
        document.querySelector(".green").addEventListener("click", function() {
            var str =
                "This is box number " +
                self.position +
                " and it is " +
                self.color;
            alert(str);
        });
    },
    showPosition: function() {
        //here we have regular object method so we can access variables inside
        //object with this keyword
        console.log(this.position);
    }
};
box5.clickMe();
box5.showPosition();

//ES6
const box6 = {
    color: "blue",
    position: 2,
    //beware if we use here (on clickMe method) arrow function we will get
    //undefined when calling this, it is because arrow function shares lexical
    //scope of its surroundings so here with global context and there is no
    //color or position in global context
    clickMe: function() {
        //by using arrow function we have access to this keyword, because arrow
        //function shares the lexical this keyword of its surroundings (so when
        //we need to preserve the value of this keyword we would use arrow
        //function)
        document.querySelector(".blue").addEventListener("click", () => {
            let str =
                "This is box number " +
                this.position +
                " and it is " +
                this.color;
            alert(str);
        });
    }
};
box6.clickMe();
