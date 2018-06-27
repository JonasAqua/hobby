import node from "node"

// Errors
const invalidArgumentLengthError = new Error('Invalid Argument Length, it should be 2!')
const invalidArgumentTypeError = new Error('Invalid Argument Type or Types, both needs to be numbers!')

// Error Handling
if (process.argv.length != 4) {
  console.error(invalidArgumentLengthError)
  process.exit(1)
}
if (typeof process.argv[2] !== 'number' || typeof process.argv[3] !== 'number') {
  console.error(invalidArgumentTypeError)
  process.exit(2)
} 

const numberOfDice: number = parseInt(process.argv[2])
const numberOfSides: number = parseInt(process.argv[3])

const output: number = rollAllDice(numberOfDice, numberOfSides)
console.log(output)


function rollAllDice(numberOfDice: number, numberOfSides: number): number {
  var output: number = 0
  for (var i = 0; i < numberOfDice; i++) {
    output += rollSingleDice(numberOfSides)
  }
  return output
}

function rollSingleDice(numberOfSides: number): number {
  return generateRandomNumber(1, numberOfSides + 1)
}

// min: inclusive
// max: exclusive
function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min
}