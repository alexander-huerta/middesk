import '../App.css';
import { getBusiness } from '../api/getData.js';
import StatusBar from './StatusBar.jsx'

const BusinessProfileSummary = ({businessObjectSummary, changeView, businessId}) => {
  const checkStatus = () => {
    getBusiness(businessId, () => changeView('businessProfile'))
  }
  const hasBusinessData = businessObjectSummary.name.length;


  return (
    <div className="form-box">
      <StatusBar/>

      {hasBusinessData > 0 &&
      <p> {businessObjectSummary.name}</p>}

      {businessId  &&
      <p> Business ID: {businessId}</p>
      }

      {hasBusinessData > 0 &&
      <p> {businessObjectSummary.website.url}</p>
      }

      <input
            type="submit"
            value="View full business profile"
            className="button"
            onClick={checkStatus}/>
    </div>
  );
}

export default BusinessProfileSummary;
