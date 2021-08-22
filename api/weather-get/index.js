const axios = require('axios');
const baseUrl = 'https://aiwear-apim.azure-api.net/api/weather';


module.exports = async function(context, req) {
  context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
  const config = {
    headers: {'Ocp-Apim-Subscription-Key': process.env["REACT_APP_WEATHER_KEY"]}
  }

  console.log(config)

  try {
    context.res = {
      // status defaults to 200 */
      body: config
    };
  } catch (err) {
    context.res = {
      // status defaults to 200 */
      body: err
    };
    console.error(err);
  }
  context.done();
};