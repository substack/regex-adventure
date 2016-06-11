var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.doesMatch("123.jpg")
  userSolution.doesMatch("123.jpeg")
  userSolution.doesNotMatch("abc.jpeg")
  userSolution.doesNotMatch("123abc.jpeg")
  userSolution.doesNotMatch("123")
  userSolution.doesNotMatch("123.jpg2000")
  userSolution.doesNotMatch("123.png")
  userSolution.doesNotMatch(".jpeg")
})
