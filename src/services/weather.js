export async function getWeather(latitude, longitude) {

  const coordinates = {
    "lat": latitude,
    "lng": longitude
  }

  try {
    const response = await fetch('/api/weather-get', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(coordinates)
    })

    return await response.json()

  } catch (error) {
    console.log(error)
  }

}

export default { getWeather }