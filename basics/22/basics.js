//BLOCKS AND IIFE (function and block scoping)

//ES5
(function() {
    var c = 99;
})();
// console log below won't work because it is in IIFE (in es5 this is the only
//way to achive data privacy)
// console.log(c);

//ES6
{
    const a = 12;
    let b = 140;
    var c = 129;
}
// code below will not work because in es6 variables are block scoped so a 
//variable is not accessible outside of the block (here a, b and c)
// console.log(a + b + c);
