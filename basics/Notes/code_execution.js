/* 
CODE EXECUTION
Code is runned by host which is using Javascript engine:
-parsing (reading line by line, code checking)
-if parser decides that everything is ok then it is producing 
abstract synatax tree
-after this our tree is beeing conversed into a machine code (set of
instructions runned on the machine)

EXECUTION CONTEXT (EXAMPLES IN FOLDER 13)
Global execution context is for variables and functions that
are not inside of any function. Each time we call a function 
is gets its own execution context (this new context is beeing
put on top of the current context and creating execution stack).

HOISTING (EXAMPLES IN FOLDER 12)
Hoisting in js means that function declaration is available to 
use before it is even declared (in the creation phase of the
execution context the function declaration is beeing stored in
the variable object, thats why the function is available to use
in code even before declaration). Function expression will not 
work like this (function declared inside variable).

Hoisting variables works different. Variable is beeing declared 
before it is declared in code but it is beeing intialized with 
value 'undefined', so when we call it before declaration it will 
not return real variable but 'undefined' (in the creation phase 
code is scanned for variables and they are set to undefined). 

Variable with the same name as regular variable outside of function
will have other value as this declared inside function (this is 
because one variable is declared in global execution context and
variable declared inside function gets its own execution context
so thats they are holding different values). 

SCOPING (EXAMPLES IN FOLDER 13)
Global scope variables, functions etc. are available from everywhere 
in your file/code. Global scope is like global execution context. 

There is also local scope. For example scope inside function can access
variables inside function and all variables outside of it, this goes
also for function inside function inside function (third function can
access variables from global scope). Scopes togheter create scope chain.
You cannot access variables inside local scopes inside parent scope, unless
you return them. 

Difference between scope and stack is that scope is the order in which
function are called. Scope chain on the other hand is the order in which 
functions are written in the code. The order in which functions are called
does not determine the scope.

THIS KEYWORD (EXAMPLES IN FOLDER 11)
Variable in each execution context. Stored in execution context object. In 
global call it points to window object in the browser (default mode). In method
this points to object that is calling the method. This does not have a value
until a function where it is defined is actually called. 

MESSAGE QUEUE
Holds all events that happen in browser (they are waiting for the moment when 
they can be executed (only when execution stack is empty, so only when all 
functions returned)). When one of the message queue is processed it gets its own 
execution context (they are functions so they have to get one) and then this 
context is landing on top of the execution stack.
*/
