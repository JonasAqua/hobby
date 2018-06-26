"use strict";
exports.__esModule = true;
// TODO: Error handling
var numberOfDice = parseInt(process.argv[2]);
var numberOfSides = parseInt(process.argv[3]);
var output = rollAllDice(numberOfDice, numberOfSides);
console.log(output);
function rollAllDice(numberOfDice, numberOfSides) {
    var output = 0;
    for (var i = 0; i < numberOfDice; i++) {
        output += rollSingleDice(numberOfSides);
    }
    return output;
}
function rollSingleDice(numberOfSides) {
    return generateRandomNumber(1, numberOfSides + 1);
}
// min: inclusive
// max: exclusive
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
