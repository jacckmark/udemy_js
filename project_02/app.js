//BUDGET CONTROLLER
var budgetController = (function() {
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(curr) {
            sum += curr.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, desc, val) {
            var newItem, ID;
            //create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //create new item based on 'inc' or 'exp' type
            if (type === "exp") {
                newItem = new Expense(ID, desc, val);
            } else if (type === "inc") {
                newItem = new Income(ID, desc, val);
            }
            //push created element to data structure
            data.allItems[type].push(newItem);
            return newItem;
        },

        deleteItem: function(type, id) {
            var ids, index;
            //creates array of id to remove
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            index = ids.indexOf(id);
            if (index !== -1) {
                //if index is different than -1 (not found), splice on element
                //in array on position index
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function() {
            calculateTotal("exp");
            calculateTotal("inc");
            data.budget = data.totals.inc - data.totals.exp;
            if (data.totals.inc > 0) {
                data.percentage = Math.round(
                    (data.totals.exp / data.totals.inc) * 100
                );
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function() {
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function() {
            console.log(data);
        }
    };
})();

//UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputButton: ".add__btn",
        incomeContainer: ".income__list",
        expenseContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expenseLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
        expensesPerc: ".item__percentage",
        dateLabel: ".budget__title--month"
    };

    //example of a private function (available only for use in UIController)
    var formatNumber = function(num, type) {
        var numSplit, int, dec;
        //absolute number (from negative number to normal number)
        num = Math.abs(num);
        //cut additional decimal numbers from number (here to two places),
        //this function is rounding if needed, also when we pass number 10 for
        //example it will return 10.00 (this function is returning string)
        num = num.toFixed(2);
        //divides string (our number is string right now) when stumbles on
        //a dot (so we have integer and decimals)
        numSplit = num.split(".");
        int = numSplit[0];
        if (int.length > 3) {
            int =
                int.substr(0, int.length - 3) +
                "," +
                int.substr(int.length - 3, 3);
        }
        dec = numSplit[1];
        return (
            (type === "exp" ? (sign = "-") : (sign = "+")) +
            " " +
            int +
            "." +
            dec
        );
    };

    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription)
                    .value,
                value: parseFloat(
                    document.querySelector(DOMstrings.inputValue).value
                )
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            //creating html string with placeholder text
            if (type === "inc") {
                element = DOMstrings.incomeContainer;
                html =
                    '<div class="item clearfix" id="inc-%id%"><div class=' +
                    '"item__description">%description%</div><div class="right ' +
                    'clearfix"><div class="item__value">%value%</div><div ' +
                    'class="item__delete"><button class="item__delete--btn">' +
                    '<i class="ion-ios-close-outline"></i></button></div>' +
                    "</div></div>";
            } else if (type === "exp") {
                element = DOMstrings.expenseContainer;
                html =
                    '<div class="item clearfix" id="exp-%id%"><div class=' +
                    '"item__description">%description%</div><div class=' +
                    '"right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__percentage">21%</div><div class=' +
                    '"item__delete"><button class="item__delete--btn"><i class=' +
                    '"ion-ios-close-outline"></i></button></div></div></div>';
            }
            //replace placeholders with actual data from object
            newHtml = html.replace("%id%", obj.id);
            newHtml = newHtml.replace("%description%", obj.description);
            newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));
            //insert the html into the DOM
            document
                .querySelector(element)
                .insertAdjacentHTML("beforeend", newHtml);
        },

        deleteListItem: function(selectorID) {
            //we can remove element from DOM only from parent element of this
            //element (that's why el is holding element and then we are calling
            //parentNode on it)
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(
                DOMstrings.inputDescription + ", " + DOMstrings.inputValue
            );
            //here using slice method (available only for Arrays) on regular
            //list item, we are passing it in call as 'this' so that 'this'
            //variable now holds fields var and we can perform slice on it
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            //move focus back to inputDescription field
            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? (type = "inc") : (type = "exp");
            document.querySelector(
                DOMstrings.budgetLabel
            ).textContent = formatNumber(obj.budget, type);
            document.querySelector(
                DOMstrings.incomeLabel
            ).textContent = formatNumber(obj.totalInc, "inc");
            document.querySelector(
                DOMstrings.expenseLabel
            ).textContent = formatNumber(obj.totalExp, "exp");

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent =
                    obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent =
                    "---";
            }
        },

        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMstrings.expensesPerc);
            nodeListForEach(fields, function(current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
            });
        },

        displayMonth: function() {
            var now, year, month, months;
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            now = new Date();
            year = now.getFullYear();
            month = months[now.getMonth()];
            document.querySelector(DOMstrings.dateLabel).textContent =
                month + " " + year;
        },

        changeType: function() {
            var fields = document.querySelectorAll(
                DOMstrings.inputType +
                    "," +
                    DOMstrings.inputDescription +
                    "," +
                    DOMstrings.inputValue
            );
            nodeListForEach(fields, function(curr) {
                curr.classList.toggle("red-focus");
            });
            document
                .querySelector(DOMstrings.inputButton)
                .classList.toggle("red");
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//GLOBAL CONTROLLER
var controller = (function(budgetContr, UIContr) {
    var setupEventListeners = function() {
        var DOM = UIContr.getDOMstrings();
        document
            .querySelector(DOM.inputButton)
            .addEventListener("click", ctrlAddItem);

        //function handling when pressed enter button
        document.addEventListener("keypress", function(event) {
            //event.which for older browsers
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document
            .querySelector(DOM.container)
            .addEventListener("click", ctrlDeleteItem);
        document
            .querySelector(DOM.inputType)
            .addEventListener("change", UIContr.changeType);
    };

    var updateBudget = function() {
        budgetContr.calculateBudget();
        var budget = budgetContr.getBudget();
        UIContr.displayBudget(budget);
    };

    var updatePercentages = function() {
        budgetContr.calculatePercentages();
        var percentages = budgetContr.getPercentages();
        UIContr.displayPercentages(percentages);
    };

    var ctrlAddItem = function() {
        var input, newItem;
        input = UIController.getInput();

        if (
            input.description !== "" &&
            !isNaN(input.value) &&
            input.value > 0
        ) {
            newItem = budgetContr.addItem(
                input.type,
                input.description,
                input.value
            );
            UIContr.addListItem(newItem, input.type);
            UIContr.clearFields();
            updateBudget();
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event) {
        var itemId, splitId, ID, type;
        //go 4 nodes up from our target element (target element is here our
        //delete button), this is called DOM traversing
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemId) {
            //splits string (divides where '-') and writes result to an array
            splitId = itemId.split("-");
            type = splitId[0];
            //returned data is string so we have to parse it
            ID = parseInt(splitId[1]);
            budgetContr.deleteItem(type, ID);
            UIContr.deleteListItem(itemId);
            updateBudget();
            updatePercentages();
        }
    };

    return {
        init: function() {
            console.log("%cApplication has started", "color: #733d00");
            UIContr.displayMonth();
            UIContr.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };
})(budgetController, UIController);

controller.init();
