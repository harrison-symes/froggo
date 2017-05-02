
spawnCar = (road) => {
  var lane = Math.round(Math.random() * road[0].length)
  console.log(lane);
}

module.exports = {
  spawnCar
}
