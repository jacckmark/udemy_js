/* 
+-----------+    +Strategy       +--------------+
|  Context  | <----------------+ |   Strategy   |
+-----------+                    +--------------+
                +--------------> |  alghoritm   | <--------------+
                |                |  blueprint   |                |
                |                +--------------+                |
                |                                                |
                |                        ^                       |
                |                        |                       |
                +                        +                       +

       +-----------------+      +-----------------+      +-----------------+
       |ConcreteStrategy1|      |ConcreteStrategy2|      |ConcreteStrategy3|
       +-----------------+      +-----------------+      +-----------------+
       |    alghoritm    |      |    alghoritm    |      |    alghoritm    |
       | implementation  |      | implementation  |      | implementation  |
       +-----------------+      +-----------------+      +-----------------+
*/

/* 
Strategy Pattern is best use when:
-you need use several algorithms which have different variations (the bigger 
    alghoritm the better)
-there are conditional statements around several algorithms which are related 
    between
-most of your classes have related behaviours
 */

//this class is like interface, it contains variable _strategy which points at
//some strategy (1, 2 or 3)
class StrategyManager {
    constructor() {
        this._strategy = null;
    }
    //we need geter and setter to be able to access _strategy varaible (it is
    //private one)
    set strategy(strategy) {
        this._strategy = strategy;
    }
    get strategy() {
        return this._strategy;
    }

    doAction() {
        this._strategy.doAction();
    }
}

//available strategies (each one has implemented method doAction())
class Strategy1 {
    doAction() {
        console.log("I'm doing action from strategy nr 1");
    }
}
class Strategy2 {
    doAction() {
        console.log("I'm doing action from strategy nr 2");
    }
}
class Strategy3 {
    doAction() {
        console.log("I'm doing action from strategy nr 3");
    }
}

//context/client of strategy pattern place where we are using/running methods
//defined in strategies, decision which strategy we choose is made by strategy
//manager
const strategyManager = new StrategyManager();
const strategy1 = new Strategy1();
const strategy2 = new Strategy2();
const strategy3 = new Strategy3();

strategyManager.strategy = strategy1;
strategyManager.doAction();

strategyManager.strategy = strategy2;
strategyManager.doAction();

strategyManager.strategy = strategy3;
strategyManager.doAction();
