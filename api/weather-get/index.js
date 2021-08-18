const axios = require('axios');
const baseUrl = 'https://aiwear-apim.azure-api.net/api/weather';

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  console.log(req)
  
  const config = {
    headers: {'Ocp-Apim-Subscription-Key': process.env.REACT_APP_WEATHER_KEY}
  }

  const response = await axios.get(`${baseUrl}/weather?lat=${req.body.lat}&lon=${req.body.lng}&units=metric&lang=en&mode=json`, config)

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: response.data
  };
}