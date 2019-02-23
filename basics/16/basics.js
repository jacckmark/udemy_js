//regular function (with hidden variable inside)
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//this function will be treated as an expression not a declaration 
//IIFE (immedietly invoked function expressions) helps us with hiding variables 
//that does not need to be seen in the outside scope and does not interfere 
//with other variables in our global execution context, also IIFE will be called 
//right away (this is declaration and calling of a function in one)
(function (){
    var score2 = Math.random() * 10;
    console.log(score2 >= 5);
})();
//variables are not accesible from this place (variable score because of scope,
//variable score2 because it is an IIFE function)
//console.log(score);
//console.log(score2);

//IIFE function with parameter
(function (number){
    var score2 = Math.random() * 10;
    console.log(score2 >= 5 - number);
})(2);