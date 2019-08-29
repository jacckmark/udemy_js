//MAPS DATA STRUCTURE

//maps are something entirely new so there is no example for es5
//ES6

//map creating and assigning elements (first one parameter in a set is a key,
//second is a value)
const question = new Map();
//string key
question.set("question", "What's your name?");
//number key
question.set(1, "Julian");
question.set(2, "Jan");
question.set(3, "Frida");
question.set(4, "Karol");
question.set(5, "Tadeusz");
question.set(6, "Joanna");
question.set("correct", 1);
//boolean key
question.set(true, "Correct answer ;)");
question.set(false, "It's not a correct answer. Try again later!");

//to retrieve value from a map we have to do get and pass a key (number/boolean/
//string)
console.log(question.get(3));
//size of our map
console.log(question.size);

//has is a method that checks whether element with such key exist in a map
if (question.has(4)) {
    //removing one element from a map
    question.delete(4);
}

question.forEach((element, key) => {
    console.log(
        `This is a key: ${key}, and it's value is set to a: ${element}`
    );
});

//we return all values (method entries()) and with destructuring we are assigning
//current (in a loop) element to a local variables: key and value
for (let [key, value] of question.entries()) {
    //we print only questions that have number keys
    if (typeof key === "number") {
        console.log(`key: ${key}\nvalue: ${value}`);
    }
}

//method for deleting all elements in an map
question.clear();
