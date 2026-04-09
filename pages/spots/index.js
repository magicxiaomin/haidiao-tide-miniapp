const spotService = require('../../services/spotService')
const { riskLabel, scoreLabel } = require('../../utils/format')

Page({
  data: {
    spots: [],
    currentSpotId: '',
    spot: null
  },

  onLoad(options) {
    const spots = spotService.getSpots()
    const currentSpotId = options.id || spots[0].id
    this.setData({ spots, currentSpotId })
    this.loadSpot(currentSpotId)
  },

  loadSpot(id) {
    const spot = spotService.getSpotById(id)
    this.setData({
      currentSpotId: id,
      spot: {
        ...spot,
        riskText: riskLabel(spot.riskLevel),
        scoreText: scoreLabel(spot.score)
      }
    })
  },

  switchSpot(event) {
    const { id } = event.currentTarget.dataset
    this.loadSpot(id)
  }
})
