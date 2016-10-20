"use strict"
var chai  = require("chai");
var assert = chai.assert
var expect = chai.expect

import getPallete from '../lib/get_pallete'

describe('#indexOf()', function() {
  it('should return -1', function() {
    // [1,2,3].indexOf(4).should.equal(-1);
    var test = [1,2,3].indexOf(4)
    assert.equal(test, -1);
  });
  it('should return an array with 3 elements', () => {
    assert.equal(getPallete().length, 3)
  })
});
