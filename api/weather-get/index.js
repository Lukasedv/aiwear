const axios = require('axios');
const baseUrl = 'https://aiwear-apim.azure-api.net/api/weather';


module.exports = async function(context, req) {
  context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
  const weatherKey = process.env.WEATHER_KEY
  const config = {
    headers: {'Ocp-Apim-Subscription-Key': weatherKey}
  }

  try {
    const response = await axios.get(`${baseUrl}/weather?lat=${req.body.lat}&lon=${req.body.lng}&units=metric&lang=en&mode=json`, config)
    context.res = {
      // status defaults to 200 */
      body: response.data
    };
  } catch (err) {
    context.res = {
      status: 400,
      body: err
    };
    console.error(err);
  }
};