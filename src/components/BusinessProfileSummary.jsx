import '../App.css';
import { getBusiness } from '../api/getData.js';
import StatusBar from './StatusBar.jsx'

const BusinessProfileSummary = ({businessObjectSummary, setBusinessObject, setView, businessId}) => {

  const checkStatus = () => {
    getBusiness(businessId, (businessObject) => {
      setBusinessObject(businessObject)
      setView('businessProfile')
    })
  }
  const hasBusinessData = businessObjectSummary.name.length;

  return (
    <div className="form-box">
      <StatusBar/>

      {hasBusinessData > 0 &&
      <p> Successfully added: {businessObjectSummary.name}</p>}

      {businessId  &&
      <p> Business ID: {businessId}</p>
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


