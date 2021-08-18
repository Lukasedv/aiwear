export async function getWeather(lat, lng) {

  const response = await fetch('/api/weather-get', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: {
      'lat': lat,
      'lng': lng
    }
  }
  )
  console.log(response)
  return await response.data
}

export default { getWeather }