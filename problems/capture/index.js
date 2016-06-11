var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.equal("x=5", '5')
  userSolution.equal("abc x=5", '5')
  userSolution.equal("x=abc", null)
  userSolution.equal("beep x=123123 boop", '123123')
})
