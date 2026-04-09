const spots = [
  {
    id: 'spot-001',
    name: '朱家尖东沙防波堤',
    city: '舟山',
    distanceKm: 12,
    address: '靠近南沙景区东侧防波堤',
    description: '适合晨间轻矶钓与岸抛路亚，补给和停车相对方便，新手也能上手。',
    score: 91,
    riskLevel: 'medium',
    bestWindow: '05:20-07:10',
    tags: ['矶钓', '路亚', '黑鲷', '鲈鱼'],
    audience: ['新手友好', '短途方便', '晨口更强'],
    reasons: [
      '潮位上升段和晨光窗口高度重叠。',
      '补给与停车方便，出钓成本低。',
      '适合矶钓和轻路亚双切换。'
    ],
    gearTips: [
      '1.5-2 号矶竿或轻路亚竿',
      '小铁板、软虫和南极虾可双备',
      '外侧地面湿滑，防滑鞋优先'
    ],
    suggestion: {
      method: '轻矶钓优先，天亮后可切小铁板试青物',
      targetFish: '黑鲷、鲈鱼、小青物',
      warning: '10:00 后侧风变大，靠外侧站位注意防滑'
    },
    conditions: [
      { label: '风速', value: '4级 东北风' },
      { label: '浪高', value: '0.8m' },
      { label: '水温', value: '17.6°C' },
      { label: '月相', value: '上弦前夜' }
    ],
    timeline: [
      { time: '02:10', type: '低潮', height: '0.6m', note: '潮底偏弱' },
      { time: '05:20', type: '高潮', height: '2.1m', note: '晨间强窗口' },
      { time: '08:10', type: '平潮', height: '1.6m', note: '可短守' },
      { time: '11:50', type: '低潮', height: '0.7m', note: '建议转场' }
    ],
    services: [
      { id: 'svc-1', title: '附近渔具补给', subtitle: '600米，可补铅坠、线组和活虾', cta: '查看商家' },
      { id: 'svc-2', title: '拼船体验', subtitle: '周末早班拼船，适合带新手体验', cta: '预约咨询' }
    ]
  },
  {
    id: 'spot-002',
    name: '沈家门渔港外侧',
    city: '舟山',
    distanceKm: 6,
    address: '沈家门港区外侧岸线',
    description: '离城区近，适合下班后短时出钓，观察小潮窗口和夜间灯光带鱼情。',
    score: 82,
    riskLevel: 'low',
    bestWindow: '06:10-08:00',
    tags: ['路亚', '夜钓', '近城'],
    audience: ['城市快钓', '新手友好', '补给方便'],
    reasons: [
      '靠近城区，临时出发成本低。',
      '风浪压力相对更小，适合带新手。',
      '早晚窗口稳定，夜钓也有延展性。'
    ],
    gearTips: [
      '中小饵路亚配置即可',
      '夜钓建议头灯和反光装备齐全',
      '人流多，抛投距离不必一味求远'
    ],
    suggestion: {
      method: '早晚路亚为主，夜间可试灯下鲈鱼',
      targetFish: '鲈鱼、小青物、沙尖',
      warning: '人流较多，抛投时注意后方安全'
    },
    conditions: [
      { label: '风速', value: '3级 偏北风' },
      { label: '浪高', value: '0.4m' },
      { label: '水温', value: '18.2°C' },
      { label: '月相', value: '上弦月' }
    ],
    timeline: [
      { time: '03:00', type: '起涨', height: '1.0m', note: '可提前到场' },
      { time: '06:10', type: '高潮', height: '1.8m', note: '路亚窗口' },
      { time: '09:20', type: '回落', height: '1.1m', note: '鱼口减弱' },
      { time: '12:30', type: '低潮', height: '0.5m', note: '适合收杆' }
    ],
    services: [
      { id: 'svc-3', title: '夜钓热饮点', subtitle: '附近便利店 24 小时营业', cta: '去看看' }
    ]
  },
  {
    id: 'spot-003',
    name: '岱山燕窝山礁口',
    city: '舟山',
    distanceKm: 24,
    address: '岱山外海礁口区域',
    description: '进阶礁区钓点，大潮表现更强，但对浪况和装备要求更高。',
    score: 76,
    riskLevel: 'high',
    bestWindow: '04:50-06:30',
    tags: ['礁区', '大潮', '进阶'],
    audience: ['进阶玩家', '冲大货', '高风险'],
    reasons: [
      '大潮窗口爆发力更强。',
      '地形复杂，适合熟悉站位的老钓友。',
      '一旦浪高提升，安全风险明显增加。'
    ],
    gearTips: [
      '防滑鞋、救生衣必须齐全',
      '主线与前导建议适度上强度',
      '建议两人以上同行，不单独上礁'
    ],
    suggestion: {
      method: '熟悉地形再上礁，优先短时守晨口',
      targetFish: '黑毛、石斑、真鲷',
      warning: '浪高升到 1.2m 以上建议放弃礁区方案'
    },
    conditions: [
      { label: '风速', value: '5级 东北风' },
      { label: '浪高', value: '1.1m' },
      { label: '水温', value: '17.0°C' },
      { label: '月相', value: '上弦前夜' }
    ],
    timeline: [
      { time: '01:50', type: '低潮', height: '0.4m', note: '礁位裸露' },
      { time: '04:50', type: '高潮', height: '2.3m', note: '短爆发窗口' },
      { time: '07:20', type: '平潮', height: '1.7m', note: '注意侧浪' },
      { time: '10:50', type: '低潮', height: '0.6m', note: '建议撤离' }
    ],
    services: [
      { id: 'svc-4', title: '向导带点', subtitle: '礁区新手建议联系本地向导', cta: '联系向导' }
    ]
  }
]

module.exports = spots
