//main dish class, superclass of all dishes
class Dish {
    constructor() {}
    getPrice() {}
    getDes() {}
}

//one of the dishes which will be decorated by sidedishes
class Steak extends Dish {
    constructor() {
        super();
    }
    getPrice() {
        return 13;
    }
    getDes() {
        return "Steak";
    }
}

//main decorator class all sidedishes are inheriting from class sidedish
class SideDish extends Dish {
    constructor(dish) {
        super();
        this.dish = dish;
    }
    getPrice() {
        return this.dish.getPrice();
    }
    getDes() {
        return this.dish.getDes();
    }
}

//concrete decorator nr 1
class Pommes extends SideDish {
    constructor(dish) {
        super(dish);
    }
    getPrice() {
        return super.getPrice() + 9;
    }
    getDes() {
        return super.getDes() + " Pommes";
    }
}

//concrete decorator nr 2
class Mayonnaise extends SideDish {
    constructor(dish) {
        super(dish);
    }
    getPrice() {
        return super.getPrice() + 12;
    }
    getDes() {
        return super.getDes() + " Mayonnaise";
    }
}

//actual decorating of steak with Pommes and Mayonnaise classes
let dish = new Mayonnaise(new Pommes(new Steak()));
console.log(dish.getDes());
console.log(dish.getPrice());
