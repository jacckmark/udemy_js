console.log("FOR LOOP");
var family=["Kermit", "Naleśnik", "Aleksandra", "Aleksander", "Filip", "Malina"];
for (var i = 0; i < family.length; i++){
   console.log(family[i]); 
}
console.log("WHILE LOOP");
//same effect as for loop but in while loop version
var y = 0
while (y < family.length){
    console.log(family[y]);
    y++;
}
//for loop with continue
console.log("FOR LOOP WITH CONTINUE");
for (var x = 0; x < family.length; x++){
    if (family[x] === "Kermit") continue;
    //if condition is meet then we will continue to next iteration without 
    //executing the rest of the code (so when in array family our loop hits
    //Kermit string then it won't be printed)
    console.log(family[x]); 
}
//for loop with continue
console.log("FOR LOOP WITH BREAK");
for (var x = 0; x < family.length; x++){
    if (family[x] === "Aleksander") break;
    //if condition is meet then we will break from loop (whole loop flow will
    //be stopped immediatly and no more code from loop will be executed)
    console.log(family[x]); 
}

console.log("FOR LOOP (from last to first element)");
for (var i = family.length - 1; i >= 0; i--){
   console.log(family[i]); 
}