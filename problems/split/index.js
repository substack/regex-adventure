var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.deepEqual('1,2,3', ['1','2','3'])
  userSolution.deepEqual('4, 5, 6, 7', ['4','5','6','7'])
  userSolution.deepEqual('1337', ['1337'])
  userSolution.deepEqual('a,\nb,\nc,\nd', ['a','b','c','d'])
  userSolution.deepEqual('q\r\n  ,\r\n  r\r\n  ,\r\n  s', ['q','r','s'])
})
