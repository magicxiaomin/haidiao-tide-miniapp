const { request } = require('./http')
const {
  OPEN_METEO_BASE_URL,
  OPEN_METEO_MARINE_PARAMS
} = require('../config/data-source')

function mapWaveRisk(waveHeight) {
  if (waveHeight >= 1.2) {
    return 'high'
  }

  if (waveHeight >= 0.7) {
    return 'medium'
  }

  return 'low'
}

function formatNumber(value, digits) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return '--'
  }

  return value.toFixed(digits)
}

function mapScoreByWave(waveHeight) {
  if (typeof waveHeight !== 'number' || Number.isNaN(waveHeight)) {
    return 72
  }

  if (waveHeight < 0.5) {
    return 84
  }

  if (waveHeight < 0.9) {
    return 78
  }

  if (waveHeight < 1.2) {
    return 68
  }

  return 54
}

function buildAdviceByWave(waveHeight) {
  if (typeof waveHeight !== 'number' || Number.isNaN(waveHeight)) {
    return '海况更新中，先参考潮位趋势和常用钓点经验。'
  }

  if (waveHeight < 0.5) {
    return '浪况平稳，适合轻装备出钓和带新手体验。'
  }

  if (waveHeight < 0.9) {
    return '浪况可控，适合岸抛和轻矶钓，注意风向变化。'
  }

  if (waveHeight < 1.2) {
    return '浪开始抬升，更适合观察短时窗口，不建议久站外侧。'
  }

  return '浪况偏大，建议观望或选择更稳的近岸点位。'
}

async function fetchMarineSnapshot(lat, lng) {
  const data = await request({
    url: OPEN_METEO_BASE_URL,
    method: 'GET',
    data: {
      latitude: lat,
      longitude: lng,
      current: 'wave_height,wind_wave_height,swell_wave_height,sea_surface_temperature,wave_direction,wave_period,sea_level_height_msl',
      hourly: OPEN_METEO_MARINE_PARAMS,
      forecast_days: 2,
      timezone: 'Asia/Shanghai'
    }
  })

  const current = data.current || {}
  const waveHeight = current.wave_height

  return {
    source: 'open-meteo',
    fetchedAt: current.time || '',
    waveHeight,
    windWaveHeight: current.wind_wave_height,
    swellWaveHeight: current.swell_wave_height,
    seaSurfaceTemperature: current.sea_surface_temperature,
    waveDirection: current.wave_direction,
    wavePeriod: current.wave_period,
    seaLevelHeight: current.sea_level_height_msl,
    riskLevel: mapWaveRisk(waveHeight),
    score: mapScoreByWave(waveHeight),
    weatherText: `浪高 ${formatNumber(waveHeight, 1)}m / 风浪 ${formatNumber(current.wind_wave_height, 1)}m / 水温 ${formatNumber(current.sea_surface_temperature, 1)}°C`,
    advice: buildAdviceByWave(waveHeight)
  }
}

function buildHomeLiveSummary(snapshot) {
  return {
    score: snapshot.score,
    title: snapshot.advice,
    weather: snapshot.weatherText,
    risk: snapshot.riskLevel === 'high'
      ? '当前浪况偏大，优先选择更稳近岸点，礁区谨慎。'
      : snapshot.riskLevel === 'medium'
        ? '浪况可控但有起伏，注意短时风浪变化。'
        : '当前海况较稳，适合优先安排近岸窗口。',
    fetchedAt: snapshot.fetchedAt
  }
}

function buildSpotConditions(snapshot) {
  return {
    score: snapshot.score,
    riskLevel: snapshot.riskLevel,
    conditions: [
      { label: '浪高', value: `${formatNumber(snapshot.waveHeight, 1)}m` },
      { label: '风浪', value: `${formatNumber(snapshot.windWaveHeight, 1)}m` },
      { label: '涌浪', value: `${formatNumber(snapshot.swellWaveHeight, 1)}m` },
      { label: '水温', value: `${formatNumber(snapshot.seaSurfaceTemperature, 1)}°C` }
    ],
    liveNote: snapshot.advice,
    liveMeta: `波向 ${formatNumber(snapshot.waveDirection, 0)}° / 周期 ${formatNumber(snapshot.wavePeriod, 1)}s / 海平面 ${formatNumber(snapshot.seaLevelHeight, 2)}m`
  }
}

module.exports = {
  fetchMarineSnapshot,
  buildHomeLiveSummary,
  buildSpotConditions
}
