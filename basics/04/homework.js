var johnTeam = [89, 120, 103];
var mikeTeam = [116, 94, 123];
var maryTeam = [97, 134, 105];


function countAverage(scoresArray){  
    var totalResult = 0; 
    for (var i = 0; i < scoresArray.length; i++){
        totalResult += scoresArray[i];
    }
    totalResult = totalResult / scoresArray.length;
    return totalResult;
}

function whoIsWinner(johnAvr, mikeAvr, maryAvr){
    if (johnAvr > mikeAvr && johnAvr > maryAvr){
        console.log("John's team has the highest average score of " + johnAvr + "!");
    }
    else if (mikeAvr > johnAvr && mikeAvr > maryAvr){
        console.log("Mike's team has the highest average score of " + mikeAvr + "!");
    }
    else if (maryAvr > johnAvr && maryAvr > mikeAvr){
        console.log("Mary's team has the highest average score of " + maryAvr + "!");
    }
    else if (johnAvr > mikeAvr && johnAvr === maryAvr){
        console.log("John's and Mary's team have both the highest average score of " + johnAvr + "!");
    }
    else if (johnAvr === mikeAvr && johnAvr > maryAvr){
        console.log("John's and Mike's team have both the highest average score of " + johnAvr + "!");
    }
    else if (mikeAvr > johnAvr && mikeAvr === maryAvr){
        console.log("Mike's and Mary's team have both the highest average score of " + mikeAvr + "!");
    }
    else if (johnAvr === mikeAvr && johnAvr === maryAvr){
        console.log("Every single team has the same average score of " + johnAvr + "!");
    }
    else{
        console.log("Something went terribly wrong!");
    }
    console.log("John's team average " + countAverage(johnTeam));
    console.log("Mike's team average " + countAverage(mikeTeam));
    console.log("Mary's team average " + countAverage(maryTeam));
}
whoIsWinner(countAverage(johnTeam), countAverage(mikeTeam), countAverage(maryTeam));