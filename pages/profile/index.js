const spotService = require('../../services/spotService')

Page({
  data: {
    favorites: [],
    profile: {
      name: 'Elena Moretti',
      badge: 'Gold Member',
      summary: '专注海钓、风浪判断与精品钓点探索。',
      cta: 'Advanced Risk Alerts'
    },
    memberBenefits: [
      '未来 7-15 天高级海况预测',
      '重点钓点风浪预警提醒',
      '城市精品钓点包',
      '专属出钓复盘记录'
    ],
    memberValue: '会员不只是多看几天数据，而是更早发现好窗口、更早规避坏海况。',
    businessCards: [
      {
        title: '本地渔具店合作',
        subtitle: '在热门钓点页投放原生服务卡片'
      },
      {
        title: '船家 / 向导入驻',
        subtitle: '接入预约咨询与拼船展示'
      },
      {
        title: '品牌活动合作',
        subtitle: '适合新品试投、赛事和城市主题活动'
      }
    ],
    bdCards: [
      {
        title: '船家 / 民宿 / 停车场',
        subtitle: '围绕出钓行程做本地服务分发和预约线索。'
      },
      {
        title: '城市钓点包',
        subtitle: '可做舟山、厦门、青岛、三亚等城市专题化收费产品。'
      }
    ]
  },

  onLoad() {
    this.setData({
      favorites: spotService.getFavorites().map((item, index) => ({
        ...item,
        imageClass: `fav-image-${index}`
      }))
    })
  }
})
