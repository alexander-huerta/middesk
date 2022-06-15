import {API_KEY} from './apiKey.js'
const axios = require('axios');

export const addBusiness = (businessData, cb) => {
  const postConfig = {
    method: 'post',
    url: 'https://api-sandbox.middesk.com/v1/businesses',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}}`
    },
    data : businessData
  };

  return axios(postConfig)
  .then((apiResponse) => {
    return apiResponse.data;
  })
  .then((businessSummary) => {
    cb(businessSummary)
  })
  .catch(function (error) {
    console.log(error);
  });
}

//create webhook endpoint

// export const addWebhook = (businessData, cb) => {
//   const webHookConfig = {
//     method: 'post',
//     url: 'https://api.middesk.com/v1/webhooks',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${API_KEY}}`
//     },
//     body: JSON.stringify({url: 'localhost:3000/ws', secret: 'apple'})
//   };

//   return axios(webHookConfig)
//   .then((apiResponse) => {
//     console.log(apiResponse)
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
