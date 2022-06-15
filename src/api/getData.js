import {API_KEY} from './apiKey.js'
import {businessObj} from '../sampleData/sampleNewBusiness.js'

var requestOptions = {
  method: 'GET',
  mode: 'no-cors',
    headers: {
      'Authorization': `Bearer ${API_KEY}}`
    },
    redirect: 'follow'
};

export const getBusiness = (businessId, cb) => {
  fetch(`https://api.middesk.com/v1/businesses/${businessId}`, requestOptions)
    .then((businessObject) => {
      // cb(businessObject)
      cb(businessObj)
    })
    .catch(error => console.log(error));
  }

  //Gain access to info regarding an existing webook endpoint

// const axios = require('axios');
// export const getBusiness = (endpointId) => {
//   var getEndpointConfig = {
//     method: 'get',
//     url: `https://api.middesk.com/v1/webhooks/${endpointId}`,
//     headers: {
//       Accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}}`,
//     },
//   };
//   axios(getEndpointConfig)
//   .then(endpointDetails => console.log(endpointDetails));
//   .catch(error => console.log(error));
// }