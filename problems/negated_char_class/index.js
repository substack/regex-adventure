var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.doesNotMatch('1A')
  userSolution.doesMatch('A1')
  userSolution.doesNotMatch('ABC')
  userSolution.doesMatch('abc')
  userSolution.doesNotMatch('555')
  userSolution.doesNotMatch('5z')
  userSolution.doesMatch('...')
})
