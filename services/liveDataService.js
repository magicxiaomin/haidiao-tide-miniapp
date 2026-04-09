const { request } = require('./http')
const {
  OPEN_METEO_BASE_URL,
  WORLD_TIDES_BASE_URL,
  OPEN_METEO_MARINE_PARAMS,
  WORLD_TIDES_API_KEY
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

async function fetchMarineSnapshot(lat, lng) {
  const data = await request({
    url: OPEN_METEO_BASE_URL,
    method: 'GET',
    data: {
      latitude: lat,
      longitude: lng,
      current: 'wave_height,wind_wave_height,swell_wave_height,sea_surface_temperature',
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
    riskLevel: mapWaveRisk(waveHeight),
    weatherText: `浪高 ${formatNumber(waveHeight, 1)}m / 风浪 ${formatNumber(current.wind_wave_height, 1)}m / 水温 ${formatNumber(current.sea_surface_temperature, 1)}°C`
  }
}

async function fetchTideExtremes(lat, lng, date) {
  if (!WORLD_TIDES_API_KEY) {
    return {
      source: 'worldtides',
      enabled: false,
      extremes: []
    }
  }

  const data = await request({
    url: WORLD_TIDES_BASE_URL,
    method: 'GET',
    data: {
      extremes: '',
      date,
      days: 2,
      datum: 'CD',
      localtime: '',
      lat,
      lon: lng,
      key: WORLD_TIDES_API_KEY
    }
  })

  return {
    source: 'worldtides',
    enabled: true,
    station: data.station || '',
    extremes: data.extremes || [],
    copyright: data.copyright || ''
  }
}

async function getFishingSnapshot({ lat, lng, date }) {
  const [marine, tides] = await Promise.all([
    fetchMarineSnapshot(lat, lng),
    fetchTideExtremes(lat, lng, date)
  ])

  return {
    marine,
    tides
  }
}

module.exports = {
  fetchMarineSnapshot,
  fetchTideExtremes,
  getFishingSnapshot
}
