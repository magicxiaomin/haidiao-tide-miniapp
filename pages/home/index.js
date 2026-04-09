const tideService = require('../../services/tideService')
const { riskLabel, scoreLabel } = require('../../utils/format')

Page({
  data: {
    location: '',
    summary: {},
    quickActions: [],
    trend: [],
    spots: [],
    strategyCards: []
  },

  onLoad() {
    const data = tideService.getHomeSummary()

    this.setData({
      location: data.location,
      summary: {
        ...data.summary,
        scoreText: scoreLabel(data.summary.score)
      },
      quickActions: data.quickActions,
      trend: data.trend,
      strategyCards: data.strategyCards,
      spots: data.spots.map((spot) => ({
        ...spot,
        riskText: riskLabel(spot.riskLevel)
      }))
    })
  },

  goSpotDetail(event) {
    const { id } = event.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/spots/index?id=${id}`
    })
  },

  goPlanner() {
    wx.switchTab({
      url: '/pages/planner/index'
    })
  }
})
