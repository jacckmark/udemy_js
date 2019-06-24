//SPREAD OPERATOR

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var ages = [18, 11, 90, 34];
var sum1 = addFourAges(18, 11, 90, 34);
console.log(sum1);

//ES5
// apply will give us a way to run addFourAges method with data from array, first
// parameter of apply helps us in setting 'this' property here we are not inter-
// ested in this so we pass 'null'
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
//here spread operator expands to components so we are passing whole array, but
//in the end method gets only list of elements like it would be passed one by one
const sum3 = addFourAges(...ages);
console.log(sum3);

// here spread operator is merging two arrays together (to be exact it is expanding
// arrays which are then put inside array next to each other, this way we are
// successfully creating one big array)
const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Annie", "Bob", "Jack"];
const familyMerge = [...familySmith, ...familyMiller];
console.log(familyMerge);
//it is also possible to add new elements when we are using spread operator
const familyMerge2 = [...familySmith, "Dickon", ...familyMiller];
console.log(familyMerge2);

//spread operator can also be handy when we are working with node list (here we
//are changing color of all elements (all boxes and also heading))
const heading = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const allElements = [heading, ...boxes];
//we are making array from node list (look chapter 28) and converting elements of
//this array in a loop (changing color)
Array.from(allElements).forEach(cur => (cur.style.color = "purple"));
