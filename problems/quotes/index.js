var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.deepEqual(
    'one "two three four" five six "seven eight" nine',
    ['"two three four"','"seven eight"']
  )
  userSolution.deepEqual(
    '"beep boop" whatever "tacos" eleven "eighty"',
    ['"beep boop"','"tacos"','"eighty"']
  )
  userSolution.deepEqual(
    'empty ""',
    ['""']
  )
})
