
import { Box, Button, Container } from '@material-ui/core'
import Header from './components/header'
import Forecast from './components/forecast'
import Map from './components/map'

const App = () => {
  return(
    <div>
      <Header />
      <Map />
      <Forecast />
      <Container>
        <Box m={4} y={2} textAlign='center'>
          <Button variant='contained'>
            Suggest what to wear
          </Button>
        </Box>
      </Container>
    </div>
  )
}


export default App
