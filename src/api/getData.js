//import {API_KEY} from './apiKey.js'
const axios = require('axios');


var businessId = '28b1cd17-2885-4ddf-b633-262c2b47a598'


export const getBusiness = () => {
  var getConfig = {
    method: 'get',
    url: `https://api.middesk.com/v1/businesses/${businessId}`,
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Basic bWtfdGVzdF84N2FjOGI1YWU2Mjg5ZDQ5MGIxNTllOGM6:'
     }
  };


  axios(getConfig)
  .then(function (apiResponse) {
    console.log(apiResponse.data);
    return apiResponse.data;
  })
  .catch(function (error) {
    console.log('damn it ', error);
  });
}



