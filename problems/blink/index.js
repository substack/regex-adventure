var ProblemHelper = require('../problem-helper')

module.exports = new ProblemHelper(__dirname, function(userSolution) {
  userSolution.equalTrim("@@whatever@@", '<p><blink>whatever</blink></p>')
  userSolution.equalTrim("*abc* @@def@@ __ghi__", '<p><em>abc</em> <blink>def</blink> <strong>ghi</strong></p>')
  userSolution.equalTrim("@@**cool**@@", '<p><blink><strong>cool</strong></blink></p>')
  userSolution.equalTrim("beep @@boop@@ says *the* @@**robot**@@!",
    '<p>beep <blink>boop</blink> says <em>the</em> <blink><strong>robot</strong></blink>!</p>'
  )
})
