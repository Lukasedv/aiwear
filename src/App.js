import { useState } from 'react'
import { Box, Button, Container } from '@material-ui/core'
import Header from './components/header'
import Forecast from './components/forecast'
import Map from './components/map'

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return(
    <div>
      <Header />
      <Map lat={lat} lng={lng}/>
      <Forecast />
      {lat}{lng}
      <Container>
        <Box m={4} y={2} textAlign='center'>
          <Button variant='contained' onClick={getLocation}>
            Suggest what to wear
          </Button>
        </Box>
      </Container>
    </div>
  )
}


export default App
