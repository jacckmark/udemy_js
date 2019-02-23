var john = {
    fullName: 'John Mackenzie',
    mass: 190,
    height: 1.72,
    BMI: function(){
        return this.bmi = this.weight / this.height^2;
    }
}
var mark = {
    fullName: 'Mark Mackenzie2',
    mass: 72,
    height: 1.90,
    BMI: function(){
        return this.bmi = this.mass / this.height^2;
    }
}

mark.BMI();
john.BMI();

function compareAthlets(bmiOne, bmiTwo){
    if (bmiOne > bmiTwo){
        return "John has lower BMI than Mark! \nMark's BMI: " + mark.bmi + "\nJohn's BMI: " + john.bmi;
    }
    else if (bmiOne < bmiTwo){
        return "Mark has lower BMI than John! \nMark's BMI: " + mark.bmi + "\nJohn's BMI: " + john.bmi;
    }
    else{
        return "They have the same BMI! \nMark's BMI: " + mark.bmi + "\nJohn's BMI: " + john.bmi;
    }
}

alert(compareAthlets(mark.BMI, john.BMI));

