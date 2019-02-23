/* 

PRIMITIVES (EXAMPLES IN FOLDER 14)
-numbers
-strings
-booleans
-undefined
-null

OBJECTS (EXAMPLES IN FOLDER 14)
-arrays
-functions
-objects
-dates
-wrappers for numbers, string, booleans

Objects are not for storing data only in js. Class in java is in fact special object in js.
Using this special object (constructor) you can create objects instances faster (because 
you are using a blueprint for them).

Inheritance is working almost the same in js (helps you when you need object which is almost
the same like another object but with minor changes (thanks to inheritance you dont have to 
write it one again)). In js prototype property is a place where we put things which can be
later inherited (methods, properties). Every object has prototype property.

If we have for example john object that is inheriting from person class and that class has 
prototype in it, it will be inherited. Important thing to note is that person prototype is 
not the prototype of the person itself (person if it is not inheriting from other object then 
prototype of this constructor is in constructor Object Object (prototype of Object Object is 
null)). In js we call it prototype chain. Prototype chain works when we are using method or 
property and checks for them in the object that we are ineriting from (directly), if it is not 
present then it is trying in next constructor in chain, and another and another until null 
(null has no prototype, it is also final link in prototype chain, when we go there always 
undefied is return).

FUNCTIONS (EXAMPLES IN FOLDER 15)
-functions are also objects (every function is an instance of Object type)
-function will behave like any other object 
-we can store functions in variables
-we can pass function as argument to another function
-we can return function from another function
-in JS we have first-class functions (because of above features) 

CLOSURE (EXAMPLES IN FOLDER 17)
closure- an inner function has always access to the variables and 
parameters of its outer function , even after the outer function has
returned. Closure keeps an varible object even after execution context
of this variable is gone (thats why you can access variables after an 
function returns). Current execution context closed in on the variable
object and thats where the name closure comes from. While the execution
stack is changing the scope chain stays intact. 
*/