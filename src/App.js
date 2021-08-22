import { useState } from 'react'
import { Box, Button, Container } from '@material-ui/core'
import Header from './components/header'
import Forecast from './components/forecast'
import Map from './components/map'
import weatherService from './services/weather'

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weather, setWeather] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        weatherService
          .getWeather(position.coords.latitude, position.coords.longitude)
          .then(returnedWeather => {
            setWeather(returnedWeather)
            setStatus('Ready')
          })
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return(
    <div>
      <Header />
      <Map lat={lat} lng={lng} status={status}/>
      <Forecast weather={weather} status={status}/>
      <Container>
        <Box m={4} y={2} textAlign='center'>
          <Button variant='contained' onClick={getLocation}>
            Get location and weather
          </Button>
        </Box>
      </Container>
    </div>
  )
}


export default App
