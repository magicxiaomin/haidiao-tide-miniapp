module.exports = {
  location: '浙江·舟山',
  summary: {
    score: 88,
    title: '清晨上半潮最强，适合轻矶钓和路亚试青物',
    bestWindow: '05:20 - 07:40',
    risk: '午后东北风增强，浪高抬升，礁区谨慎',
    weather: '多云 19°C / 东北风 4级 / 浪高 0.8m',
    suitableFor: '适合周末早起党、轻装备玩家和带新手体验',
    recommendationReason: '潮位爬升和晨光窗口重合，近岸鱼口更稳定。'
  },
  quickActions: [
    '今天去哪更稳',
    '新手友好钓点',
    '补给方便',
    '高风险礁区避让'
  ],
  trend: [
    { time: '03:00', height: '1.2m', state: '起涨' },
    { time: '05:20', height: '2.1m', state: '高潮' },
    { time: '08:30', height: '1.4m', state: '回落' },
    { time: '11:50', height: '0.7m', state: '低潮' }
  ],
  strategyCards: [
    {
      title: '今天怎么钓',
      body: '优先朱家尖东沙防波堤，清晨守上半潮，7 点后视风向决定是否转路亚。'
    },
    {
      title: '谁更适合今天出发',
      body: '轻矶钓玩家和短途出钓用户更合适，礁区重装党今天不建议硬冲。'
    }
  ],
  spots: [
    {
      id: 'spot-001',
      name: '朱家尖东沙防波堤',
      distanceKm: 12,
      tags: ['矶钓', '黑鲷', '清晨强'],
      score: 91,
      bestWindow: '05:20-07:10',
      riskLevel: 'medium',
      reason: '潮位与晨口重合，且补给、停车都更省心'
    },
    {
      id: 'spot-002',
      name: '沈家门渔港外侧',
      distanceKm: 6,
      tags: ['路亚', '小青物', '补给方便'],
      score: 82,
      bestWindow: '06:10-08:00',
      riskLevel: 'low',
      reason: '离城近，适合临时起意和下班后短时出钓'
    },
    {
      id: 'spot-003',
      name: '岱山燕窝山礁口',
      distanceKm: 24,
      tags: ['礁区', '大潮位', '进阶'],
      score: 76,
      bestWindow: '04:50-06:30',
      riskLevel: 'high',
      reason: '有机会冲大货，但对浪况和经验要求更高'
    }
  ]
}
