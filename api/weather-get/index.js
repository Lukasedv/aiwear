const axios = require('axios');
const baseUrl = 'https://aiwear-apim.azure-api.net/api/weather';


module.exports = async function (context, req) {
  const secretkey = process.env["REACT_APP_WEATHER_KEY"]

  console.log(req.body)

  context.res.json({
      text: secretkey
  });
};