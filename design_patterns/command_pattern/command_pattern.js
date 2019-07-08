/* 
+---------------+          +---------------+             +---------------+
|    Client     |          |    Invoker    |             |    Command    |
|               |          +---------------+ <---------+ +---------------+
+---------------+          | storeCommand()|             |   execute()   |
                           +---------------+             +---------------+
       +
       |                                                         ^
       |                                                         |
       |                                                         +
       |
       |                   +---------------+             +---------------+
       |                   |   Recevier    |             |ConcreteCommand|
       +-----------------> +---------------+ <---------+ +---------------+
                           |   action()    |             |state(inf. abou|
                           +---------------+             |   t reciever) |
                                                         |   execute()   |
                                                         +---------------+
*/

//this object is storing a command object and in a right time is asking him
//to run "Execute()" method (if we were programming a dinner this would be
//waitress, she is just asking a chef to prepare a meal)
class Invoker {
    constructor() {
        console.log("Invoker created");
    }
    //method storing (command object) concrete command
    StoreCommand(command) {
        this.command = command;
    }
}

//command blueprint, all commands (concrete commands) are inheriting from this
//class (this would be a recipe blueprint)
class Command {
    constructor() {}

    Execute() {}
}

//this class creates a connection with operations that needs to be run and
//operations receiver (this would be a concrete recipe, with all details chef
//needs to prepare a meal)
class ConcreteCommand extends Command {
    constructor(receiver, state) {
        super();
        this.receiver = receiver;
        console.log("ConcreteCommand created");
    }

    Execute() {
        console.log("ConcreteCommand Execute");
        this.receiver.Action();
    }
}

//receiver knows how to do things (this would be a chef, he knows how to
//prepare a meal, he is connected with a waitress only by recipes)
class Receiver {
    constructor() {
        console.log("Receiver created");
    }

    Action() {
        console.log("Receiver Action");
    }
}

//here we are creating concretecommand and assigning a reciver to it (this would
//be a klient of a restaurant)
function init_Command() {
    let invoker = new Invoker();
    let receiver = new Receiver();
    //assigning a reciever to the created command
    let command = new ConcreteCommand(receiver);
    //store created command inside invoker
    invoker.StoreCommand(command);
    //execute a command
    invoker.command.Execute();
}

init_Command();
