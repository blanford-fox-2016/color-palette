
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var get_pallete = require('../lib/get_pallete')

describe('#indexOf()', function () {
    it('should not throw an error', function () {
        assert.equal([1,2,3].indexOf(4), -1)
    })
    it('should return -1', function () {
        assert.equal(get_pallete().length, 3)
    })
})