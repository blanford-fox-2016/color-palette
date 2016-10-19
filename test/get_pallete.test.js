'use strict'

var chai = require('chai')
var assert = chai.assert;

describe('getPallete', function() {
  it('should return array with 3 elements', function() {
    var possibility = "ABCDEF0123456789"
    var palet = []
    for (var i = 0; i < 3; i++) {
      var clr ="#"
      for (var j = 0; j < 6; j++) {
        clr += possibility[Math.floor(Math.random()*possibility.length)]
      }
        palet.push(clr)
    }
      return palet
    assert.equal(palet.length, 3);
  });
});
