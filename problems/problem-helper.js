var path = require('path')
var fs = require('fs')
var verify = require('adventure-verify')

var ProblemHelper = function(dirname, callback) {
  var self = this

  this.problem = fs.createReadStream(path.join(dirname, 'problem.txt'))
  this.solution = fs.createReadStream(path.join(dirname, 'solution.js'))

  this.verify = verify({modeReset: true}, function(args, tape) {
    self.tape = tape
    self.userSolution = require(path.resolve(args[0]))
    callback(self)
    self.tape.end()
  })
}

ProblemHelper.prototype.doesNotMatch = function(string) {
  this.tape.notOk(this.userSolution(string), "Should not match '" + string + "'")
}

ProblemHelper.prototype.doesMatch = function(string) {
  this.tape.ok(this.userSolution(string), "Should match '" + string + "'")
}

ProblemHelper.prototype.equal = function(string, data) {
  this.tape.equal(this.userSolution(string), data, "Should become '" + string + "'")
}

/**
 * "Marked" appends newline characters
 */
ProblemHelper.prototype.equalTrim = function(string, data) {
  this.tape.equal(this.userSolution(string).trim(), data, "Should become '" + string + "'")
}

ProblemHelper.prototype.deepEqual = function(string, data) {
  this.tape.deepEqual(this.userSolution(string), data, "Should match '" + string + "'")
}

module.exports = ProblemHelper
