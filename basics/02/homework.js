var markWeight = prompt("What is Mark's weight?(in kg)");
var markHeight = prompt("What is Mark's height?(in m)");
var johnWeight = prompt("What is John's weight?(in kg)");
var johnHeight = prompt("What is Johns's height?(in m)");
alert("Thank you for your information.");

function calculateBMI(weight, height){
    return weight/height^2;
}
function compareAthlets(bmiOne, bmiTwo){
    if (bmiOne > bmiTwo){
        return "John has lower BMI than Mark!";
    }
    else if (bmiOne < bmiTwo){
        return "Mark has lower BMI than John!";
    }
    else{
        return "They have the same BMI!";
    }
}
var johnBMI = calculateBMI(johnWeight, johnHeight);
var markBMI = calculateBMI(markWeight, markHeight);
alert(compareAthlets(markBMI, johnBMI));

