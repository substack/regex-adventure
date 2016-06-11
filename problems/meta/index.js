var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.doesMatch("abc.")
  userSolution.doesNotMatch("abc")
  userSolution.doesMatch('...')
  userSolution.doesNotMatch('...x')
  userSolution.doesNotMatch('...\n')
})
