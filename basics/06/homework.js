var bills = [124, 48, 268];

function calculateTip(bill){
    var tip = 0;
    if (bill >= 200){
        tip = bill * 0.1;
    }
    else if (bill < 200 && bill >= 50){
        tip = bill * 0.15;
    }
    else if (bill < 50){
        tip = bill * 0.2;
    }
    return tip;
}

var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var billsArr = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(billsArr);
