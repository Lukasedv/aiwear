export async function getWeather(latitude, longitude) {

  const coordinates = {
    "lat": latitude,
    "lng": longitude
  }

  const response = await fetch('/api/weather-get', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(coordinates)
  }
  )

  const data = await response.json()

  return data
}

export default { getWeather }