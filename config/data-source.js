const DATA_MODE = 'live'

const OPEN_METEO_BASE_URL = 'https://marine-api.open-meteo.com/v1/marine'

const OPEN_METEO_MARINE_PARAMS = [
  'wave_height',
  'wind_wave_height',
  'swell_wave_height',
  'sea_surface_temperature',
  'wave_direction',
  'wave_period',
  'sea_level_height_msl'
].join(',')

module.exports = {
  DATA_MODE,
  OPEN_METEO_BASE_URL,
  OPEN_METEO_MARINE_PARAMS,
  DEFAULT_COORDINATES: {
    zhoushan: {
      lat: 29.9857,
      lng: 122.2072
    }
  }
}
