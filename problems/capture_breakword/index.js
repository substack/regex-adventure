var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.equal("x=5", '5')
  userSolution.equal("abc x=5", '5')
  userSolution.equal('fox=123', null)
  userSolution.equal("x=abc", null)
  userSolution.equal('x=33qrs', null)
  userSolution.equal('3x=33', null)
  userSolution.equal("beep x=123123 boop", '123123')
})
