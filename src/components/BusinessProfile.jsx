import '../App.css';
import { getBusiness } from '../api/getData.js';
import StatusBar from './StatusBar.jsx'

const BusinessProfile = ({businessObject, changeView}) => {

  const checkStatus = () => {
    getBusiness()
  }

  return (
    <div>
      <StatusBar/>

      {businessObject.name.length > 0 &&
      <h4> {businessObject.name}</h4>}

      {businessObject.name.length > 0 &&
      <h4> {businessObject.tin.tin}</h4>
      }

      {businessObject.name.length > 0 &&
      <h4> {businessObject.website.url}</h4>
      }

      <button onClick={checkStatus}>
        Trigger GET for full business object
      </button>

    </div>
  );
}

export default BusinessProfile;
