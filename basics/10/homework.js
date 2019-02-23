var bills = [124, 48, 268, 180, 42];

function calculateTip(bill){
    var tip = [];
    for (var i = 0; i < bill.length; i++){
        if (bill[i] >= 200){
            tip[i] = bill[i] * 0.1;
        }
        else if (bill[i] < 200 && bill[i] >= 50){
            tip[i] = bill[i] * 0.15;
        }
        else if (bill[i] < 50){
            tip[i] = bill[i] * 0.2;
        }
    }
    return tip;
}

function addBillsTips(bill, tip){
    var billTipSum = [];
    for (var i = 0; i < bill.length; i++){
        billTipSum[i] = bill[i] + tip[i];
    }
    return billTipSum;
}

function countAverage(tip){
    var average = 0;
    for (var i = 0; i < tip.length; i++){
        average = average + tip[i]; 
    }
    return average / tip.length;
}

var tips = calculateTip(bills);
var billsTips = addBillsTips(bills, tips);
var averageTip = countAverage(tips);

console.log(tips);
console.log(billsTips);
console.log(averageTip);
