"use strict"
let chai  = require("chai");
let assert = chai.assert
let expect = chai.expect

import getPalette from '../modules/getPalette'

describe('#indexOf()', function() {
  it('should return -1', function() {
    let test = [1,2,3].indexOf(4)
    assert.equal(test, -1);
  });
  it('should return an array with 3 elements', () => {
    assert.equal(getPallete().length, 3)
  })
});
