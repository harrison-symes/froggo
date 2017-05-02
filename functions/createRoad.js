

createRoad = (x, y) => {
  return Array(x).fill([]).map((x) => {
    return Array(y).fill(null)
  })
} 

module.exports = {
  createRoad
}
