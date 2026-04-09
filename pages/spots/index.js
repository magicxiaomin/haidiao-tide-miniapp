const spotService = require('../../services/spotService')
const { riskLabel, scoreLabel } = require('../../utils/format')
const { fetchMarineSnapshot, buildSpotConditions } = require('../../services/liveDataService')
const { DATA_MODE } = require('../../config/data-source')

Page({
  data: {
    spots: [],
    currentSpotId: '',
    spot: null,
    liveBadge: ''
  },

  onLoad(options) {
    const spots = spotService.getSpots()
    const currentSpotId = options.id || spots[0].id
    this.setData({ spots, currentSpotId })
    this.loadSpot(currentSpotId)
  },

  async loadSpot(id) {
    const spot = spotService.getSpotById(id)
    let mergedSpot = {
      ...spot,
      riskText: riskLabel(spot.riskLevel),
      scoreText: scoreLabel(spot.score)
    }

    if (DATA_MODE === 'live' && spot.lat && spot.lng) {
      try {
        const marine = await fetchMarineSnapshot(spot.lat, spot.lng)
        const live = buildSpotConditions(marine)
        mergedSpot = {
          ...mergedSpot,
          score: live.score,
          riskLevel: live.riskLevel,
          riskText: riskLabel(live.riskLevel),
          scoreText: scoreLabel(live.score),
          conditions: live.conditions,
          description: live.liveNote,
          liveMeta: live.liveMeta
        }
      } catch (error) {
        console.warn('spot live data fallback', error)
      }
    }

    this.setData({
      currentSpotId: id,
      liveBadge: DATA_MODE === 'live' ? 'Open-Meteo Marine 实时海况' : 'Mock 演示数据',
      spot: mergedSpot
    })
  },

  switchSpot(event) {
    const { id } = event.currentTarget.dataset
    this.loadSpot(id)
  }
})
