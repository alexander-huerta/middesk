//import {API_KEY} from './apiKey.js'
const axios = require('axios');

export const getBusiness = (businessId, cb) => {
  var getConfig = {
    method: 'get',
    url: `https://api.middesk.com/v1/businesses/${businessId}`,
    headers: {
      'Authorization': 'Basic bWtfdGVzdF84N2FjOGI1YWU2Mjg5ZDQ5MGIxNTllOGM6'
    }
  };
console.log(getConfig.url)

  axios(getConfig)
  .then((apiResponse) => {
    console.log(apiResponse.data);
    return apiResponse.data;
  })
  .then(() => {
    if(cb) cb()
  })
  .catch(error => console.log(error));
}



