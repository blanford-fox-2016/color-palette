var color = {};

color.getPallete = function (callback) {
  var possibility = "ABCDEF0123456789"
  var palet = []
  for (var i = 0; i < 3; i++) {
    var clr ="#"
    for (var j = 0; j < 6; j++) {
      clr += possibility[Math.floor(Math.random()*possibility.length)]
    }
      palet.push(clr)
  }
    callback(palet)
}

module.exports = color
