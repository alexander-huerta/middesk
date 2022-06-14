import {API_KEY} from './apiKey.js'

var myHeaders = new Headers();
myHeaders.append( "Authorization", `Bearer ${API_KEY}}`);

var requestOptions = {
  method: 'GET',
  mode: 'no-cors',
  headers: myHeaders,
  redirect: 'follow'
};

export const getBusiness = (businessId, cb) => {
  fetch("https://api-sandbox.middesk.com/v1/businesses/25fa0da7-6de2-4d7c-bbc8-60db0ea31557/", requestOptions)
    .then((apiResponse) => {
      cb(apiResponse)
    })
    // .then((businessObject) => {
    //   console.log(businessObject)
    //   cb(businessObject)
    // })
    .catch(error => console.log(error));
  }


  // const axios = require('axios');
// export const getBusiness = (businessId, cb) => {
//   var getConfig = {
//     method: 'get',
//     url: `https://api.middesk.com/v1/businesses/${businessId}`,
//     headers: {
//       Accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}}`,
//       'Access-Control-Allow-Origin': 'http://localhost:3000',

//     },
//   };

//   axios(getConfig)
//   .then((apiResponse) => {
//     console.log('GET RESSSS', apiResponse.data);
//     return apiResponse.data;
//   })
//   .then(() => {
//     if(cb) cb()
//   })
//   .catch(error => console.log(error));
// }