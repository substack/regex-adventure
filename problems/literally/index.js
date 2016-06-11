var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.doesMatch("LITERALLY CAN'T EVEN")
  userSolution.doesNotMatch("FIGURATIVELY can't even")
  userSolution.doesMatch('I am LITERALLY on a roll down a hill right now')
  userSolution.doesNotMatch('literaturely')
})
