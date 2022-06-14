import '../App.css';
import { getBusiness } from '../api/getData.js';
import StatusBar from './StatusBar.jsx'

const OnSuccessfulAdd = ({businessObject, businessId}) => {
 //either call API repeatedly or use Webhooks.
  const checkStatus = () => {
    getBusiness(businessId)
  }
  const hasBusinessData = businessObject.name.length;
  let status = businessObject.status;

  return (
    <div className="form-box">
      <StatusBar status={status}/>

      {hasBusinessData > 0 &&
      <p>All Data for {businessObject.name}</p>}
     {JSON.stringify(businessObject)}

      <input
            type="submit"
            value="Refresh"
            className="button"
            onClick={checkStatus}/>
    </div>
  );
}

export default OnSuccessfulAdd;
