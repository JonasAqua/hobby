import node from "node"

// TODO: Error handling
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