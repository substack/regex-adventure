var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.doesMatch('az')
  userSolution.doesNotMatch('babbage')
  userSolution.doesNotMatch('AAA')
  userSolution.doesMatch('123')
  userSolution.doesMatch('abc123')
  userSolution.doesNotMatch('Q1')
  userSolution.doesMatch('under')
  userSolution.doesMatch('404x')
  userSolution.doesMatch('obelisk')
})
