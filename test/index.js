var should = require('chai').should()
var deloreanTz = require('../index')
var assert = require('chai').assert

describe('#getTimezoneName()', function () {
  it('should return a string', function () {
    assert.typeOf(deloreanTz.getTimezoneName(), 'string')
  })
})

describe('#shift()', function () {
  it('should return a string', function () {
    assert.typeOf(deloreanTz.shift('2015-12-27 22:03'), 'string')
  })
})
