var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.doesMatch('THIS SHIITAKE IS BANANAS')
  userSolution.doesMatch('BANANAS')
  userSolution.doesNotMatch('BANANAS ARE GREEN OR YELLOW')
  userSolution.doesNotMatch('NOTHING')
  userSolution.doesNotMatch('EVERYTHING IS BANANAS.')
  userSolution.doesMatch('EVERYTHING IS BANANAS')
})
