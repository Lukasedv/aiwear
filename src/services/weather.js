export async function getWeather(latitude, longitude) {

  const response = await fetch('/api/weather-get', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: {
      lat: latitude,
      lng: longitude
    }
  }
  )
  console.log(response)
  return await response.data
}

export default { getWeather }