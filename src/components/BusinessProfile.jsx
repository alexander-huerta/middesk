import '../App.css';
import { getBusiness } from '../api/getData.js';
import StatusBar from './StatusBar.jsx'

const OnSuccessfulAdd = ({businessObject,  businessId}) => {


    //either call API again
    //or use Webhooks.
  const checkStatus = () => {
    getBusiness(businessId)
    //call get business. pass callback changeView
  }

  const hasBusinessData = businessObject.name.length;
  let status = businessObject.status;

  return (
    <div className="form-box">
      <StatusBar status={status}/>

      {hasBusinessData > 0 &&
      <p> {businessObject.name}</p>}
     <h2>ALL DATA</h2>
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
