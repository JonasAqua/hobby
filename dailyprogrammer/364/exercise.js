function diceRoller(optionsString) {
  var options = getDiceOptions(optionsString)
  var numberOfDice = options[0]
  var numberOfSides = options[1]
  var result = rollAllDice(numberOfDice, numberOfSides)
  return result
}

function getDiceOptions(optionsString) {
  return [2, 6]
}

function rollAllDice(numberOfDice, numberOfSides) {
  var output = 0
  for (var i = 0; i < numberOfDice; i++) {
    output += rollSingleDice(numberOfSides)
  }
  return output
}

function rollSingleDice(numberOfSides) {
  return generateRandomNumber(1, numberOfSides + 1)
}

// min: inclusive
// max: exclusive
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}