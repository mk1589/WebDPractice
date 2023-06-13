function getMilk(money, costPerBottle) { 
console.log("leaveHouse");
console.log("moveRight");
console.log("moveRight");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveRight");
console.log("moveRight");

    //var numberOfBottles = Math.floor(money/1.5)
   // console.log("buy " + numberOfBottles + " bottles of milk");
    console.log("buy "+ calcBottles(money, 1.5)+" bottles of milk");
    console.log("moveLeft");
console.log("moveLeft");
console.log("moveDown");
console.log("moveDown");

console.log("moveDown");
console.log("moveDown");
console.log("moveLeft");
console.log("moveLeft");
console.log("enterHouse");
    //return money % 1.5;//Remainder of this division.
   return calcChange(money, costPerBottle);
}

// var change = getMilk(4);
// console.log(change);

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
        
}
function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}
console.log("Hello master, here is your "+ getMilk(10, 3)+" change.");