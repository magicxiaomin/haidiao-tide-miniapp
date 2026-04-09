const DATA_MODE = 'mock'

const OPEN_METEO_BASE_URL = 'https://marine-api.open-meteo.com/v1/marine'
const WORLD_TIDES_BASE_URL = 'https://www.worldtides.info/api/v3'

const OPEN_METEO_MARINE_PARAMS = [
  'wave_height',
  'wind_wave_height',
  'swell_wave_height',
  'sea_surface_temperature'
].join(',')

module.exports = {
  DATA_MODE,
  OPEN_METEO_BASE_URL,
  WORLD_TIDES_BASE_URL,
  OPEN_METEO_MARINE_PARAMS,
  WORLD_TIDES_API_KEY: '',
  DEFAULT_COORDINATES: {
    zhoushan: {
      lat: 29.9857,
      lng: 122.2072
    }
  }
}
