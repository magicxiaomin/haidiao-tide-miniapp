function riskLabel(level) {
  const map = {
    low: '平稳',
    medium: '注意风浪',
    high: '不建议站礁'
  }

  return map[level] || '待评估'
}

function scoreLabel(score) {
  if (score >= 85) {
    return '非常值得去'
  }

  if (score >= 70) {
    return '适合安排出钓'
  }

  if (score >= 55) {
    return '可观察短时窗口'
  }

  return '建议观望'
}

module.exports = {
  riskLabel,
  scoreLabel
}
