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
  it ('should return a valid datetime format', function () {
    var regex = /^[0-9]{4}\-[0-9][0-9]\-[0-9][0-9] [0-2][0-9]:[0-5][0-9]$/
    assert.match(deloreanTz.shift(), regex, 'Offset was not formatted correctly')
  })
})

describe('#getOffset()', function () {
  it('should return a string', function () {
    assert.typeOf(deloreanTz.getOffset(), 'string')
  })

  it('should return a valid offset', function () {
    var regex = /^[\+\-][0-9]{4}$/
    assert.match(deloreanTz.getOffset(), regex, 'Offset was not formatted correctly')
  })
})
