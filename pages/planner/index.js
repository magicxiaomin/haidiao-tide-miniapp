const tideService = require('../../services/tideService')
const { riskLabel } = require('../../utils/format')

Page({
  data: {
    planner: null
  },

  onLoad() {
    const planner = tideService.getPlannerData()
    this.setData({
      planner: {
        ...planner,
        compare: planner.compare.map((item) => ({
          ...item,
          riskText: riskLabel(item.riskLevel)
        }))
      }
    })
  }
})
