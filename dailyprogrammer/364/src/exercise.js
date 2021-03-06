"use strict";
exports.__esModule = true;
// Errors
var invalidArgumentLengthError = new Error('Invalid Argument Length, it should be 2!');
var invalidArgumentTypeError = new Error('Invalid Argument Type or Types, both needs to be numbers!');
// Error Handling
if (process.argv.length != 4) {
    console.error(invalidArgumentLengthError);
    process.exit(1);
}
if (typeof process.argv[2] !== 'number' || typeof process.argv[3] !== 'number') {
    console.error(invalidArgumentTypeError);
    process.exit(2);
}
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
