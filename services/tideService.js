const homeData = require('../data/mock/home')
const spots = require('../data/mock/spots')

function getHomeSummary() {
  return homeData
}

function getPlannerData() {
  return {
    dateLabel: '未来 48 小时',
    weeklySummary: {
      title: '本周最佳建议',
      body: '周四适合稳妥出钓，周五适合带新手，周六更适合有经验玩家冲晨口。'
    },
    windows: [
      {
        day: '周四',
        time: '05:20-07:40',
        score: 88,
        note: '晨间上半潮，适合轻矶钓'
      },
      {
        day: '周五',
        time: '06:00-08:30',
        score: 81,
        note: '风更柔和，适合带新手'
      },
      {
        day: '周六',
        time: '04:40-06:10',
        score: 73,
        note: '大潮更猛，礁区注意安全'
      }
    ],
    compare: spots.map((spot) => ({
      id: spot.id,
      name: spot.name,
      score: spot.score,
      bestWindow: spot.bestWindow,
      riskLevel: spot.riskLevel
    })),
    strategies: [
      {
        title: '带新手',
        body: '优先周五去沈家门渔港外侧，风浪更柔和，撤退与补给都方便。'
      },
      {
        title: '冲大货',
        body: '只有在清晨短窗口和可控浪况下，才考虑岱山燕窝山礁口。'
      }
    ],
    checklist: [
      '救生衣、防滑鞋优先检查',
      '根据目标鱼种准备 2 套线组',
      '早口强，建议提前 40 分钟到点',
      '午后风浪抬升，预留撤点时间'
    ]
  }
}

module.exports = {
  getHomeSummary,
  getPlannerData
}
