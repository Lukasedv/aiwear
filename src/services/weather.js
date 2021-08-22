import axios from 'axios'

export const getWeather = async position => {

  const coordinates = {
    "lat": position.coords.latitude,
    "lng": position.coords.longitude
  }

  console.log(coordinates)

  const response = await axios.post('/api/weather-get', coordinates)
  return response.data
}

export default { getWeather }