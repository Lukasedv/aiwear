import axios from 'axios'

const baseUrl = 'https://aiwear-apim.azure-api.net/api/weather'

const getWeather = async (lat, lng) => {
  console.log('Getting weather')
  const config = {
    headers: {'Ocp-Apim-Subscription-Key': process.env.REACT_APP_WEATHER_KEY}
  }
  const response = await axios.get(`${baseUrl}/weather?lat=${lat}&lon=${lng}&units=metric&lang=en&mode=json`, config)
  return response.data
}

export default { getWeather }