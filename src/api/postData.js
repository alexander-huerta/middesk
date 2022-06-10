//import {API_KEY} from './apiKey.js'
const axios = require('axios');

export const addBusiness = (businessData) => {

  const postConfig = {
    method: 'post',
    url: 'https://api-sandbox.middesk.com/v1/businesses',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic bWtfdGVzdF84N2FjOGI1YWU2Mjg5ZDQ5MGIxNTllOGM6:'
    },
    data : businessData
  };

  axios(postConfig)
  .then(function (apiResponse) {
    console.log(apiResponse.data);
    return apiResponse.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}



