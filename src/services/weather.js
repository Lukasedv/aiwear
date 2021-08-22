import axios from 'axios'

export const getWeather = async position => {

  const coordinates = {
    "lat": position.coords.latitude,
    "lng": position.coords.longitude
  }

  try {
    const response = await axios.post('/api/weather-get', coordinates)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }

}

export default { getWeather }