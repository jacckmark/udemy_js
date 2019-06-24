//ARRAYS

//ES5
var boxes = document.querySelectorAll(".box");
//queryselector all returns node list
var boxesArray1 = Array.prototype.slice.call(boxes);
//here we transform node list into array (using array prototype method and call
//which is setting this parameter to boxes)

boxesArray1.forEach(function(cur) {
    cur.style.backgroundColor = "dodgerblue";
});
//above we are changing color for whole array of html elements using forEach

//in es5 if we want to do some operation on whole list of html elements but
//ommit some from this list we can do a simple loop and break (stops looping
//completly if condition met) or continue (if condition met we don't perform
//action), here only box 1 and 3 will have changed text
for (var i = 0; i < boxesArray1.length; i++) {
    if (boxesArray1[i].className === "box blue") {
        continue;
    }
    boxesArray1[i].textContent = "I changed to blue!(1)";
}

var ages = [12, 33, 9, 10, 13, 12];
//in es5 to do some operation (like checking if there are some kids in our array
//) we would have to do map and store it inside another array, and then do
//indexOf functions etc. to know exact value and place where this adults are in
//array ages
var fullAge = ages.map(function(cur) {
    return cur >= 18;
});
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

//ES6
var boxes2 = document.querySelectorAll(".box2");
const boxesArray2 = Array.from(boxes2);
//from will convert node list into array
boxesArray2.forEach(cur => (cur.style.backgroundColor = "red"));
//here we are also changing style of our array

//checking if the element of an array contains blue, when true we are ommiting
//this element and not changing the text
for (const cur of boxesArray2) {
    //for of is a spectial loop which gives us a way to loop over an array
    //without need to declare some variables for loop counting etc. we can just
    //make changes to elements (important cur is here name for addressing array
    //elements inside our loop)
    if (cur.className.includes("blue")) {
        continue;
    }
    cur.textContent = "I changed to blue!(2)";
}

//in es6 retrieving a number of element which meets some expectations (like
//element where element is grater than 18) is simple we can use findIndex to
//retrieve index of element
console.log(ages.findIndex(curr => curr >= 18));
//to get actual element (value of it) we do find
console.log(ages.find(curr => curr >= 18));
