//regular console log
console.log();
//when facing with objects it is good to encompass object inside object in
//console.log this will print them prettier and we see in instant name of 
//object
console.log({object1, object2, object3});
//we can style our console logs, this will print My friends string in color
console.log('%c My friends','color:orange;');
//print array of objects or regular array in table
console.table(array);
//console log with stack trace for when we used this function and exacly
//what defined it
const exampleFunction = () => console.trace('bye bye');
exampleFunction();