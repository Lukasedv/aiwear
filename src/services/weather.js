export async function getWeather(lat, lng) {

  const response = await fetch('/api/weather', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: {
      'lat': lat,
      'lng': lng
    }
  }
  )
  return await response.json();
}

export default { getWeather }