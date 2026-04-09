const spots = require('../data/mock/spots')

function getSpots() {
  return spots
}

function getSpotById(id) {
  return spots.find((item) => item.id === id) || spots[0]
}

function getFavorites() {
  return spots.slice(0, 2).map((item) => ({
    id: item.id,
    name: item.name,
    bestWindow: item.bestWindow,
    note: item.suggestion.method
  }))
}

module.exports = {
  getSpots,
  getSpotById,
  getFavorites
}
