//import {API_KEY} from './apiKey.js'
const axios = require('axios');

export const addBusiness = (businessData, cb) => {

  const postConfig = {
    method: 'post',
    url: 'https://api-sandbox.middesk.com/v1/businesses',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic bWtfdGVzdF84N2FjOGI1YWU2Mjg5ZDQ5MGIxNTllOGM6:'
    },
    data : businessData
  };

  return axios(postConfig)
  .then((apiResponse) => {
    return apiResponse.data;
  })
  .then((businessSummary) => {
    console.log('yoo', businessSummary.id)
    cb(businessSummary.id)
  })
  .catch(function (error) {
    console.log(error);
  });
}



