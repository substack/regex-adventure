var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.doesMatch('cat5')
  userSolution.doesMatch('dog5000')
  userSolution.doesMatch('robot10')
  userSolution.doesNotMatch('xrobot10')
  userSolution.doesNotMatch('robot')
  userSolution.doesNotMatch('robot1000f')
})
