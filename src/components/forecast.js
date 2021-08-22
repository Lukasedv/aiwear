import { Typography, Container, Box } from "@material-ui/core"

const Forecast = ({weather, status}) => {
  if(status != 'Ready') {
    return null
  }

  return(
    <Container>
      <Box m={4} y={2} textAlign='center'>
        <Typography>The forecast for {weather.name}  is {weather.main.temp}  degrees and {weather.weather[0].description} </Typography>
      </Box>
    </Container>
  )
}


export default Forecast