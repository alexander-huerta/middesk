import { useState } from 'react';
import './App.css';
import NewBusinessForm from './components/NewBusinessForm.jsx';
import BusinessProfileSummary from './components/BusinessProfileSummary.jsx';
import BusinessProfile from './components/BusinessProfile.jsx';
import {businessObjectSummary, businessObject} from './dummyData.js'

const App = () => {
  //Dynamically update State of business object - from API response

  const [businessId, setId] = useState()
  const changeId = (newId) => {
    setId(newId)
  }



  const [view, setView] = useState('newBusinessForm')
  const changeView = (newView) => {
    setView(newView)
  }

  if(view === 'newBusinessForm') {
    return (
      <div className="App">
        <NewBusinessForm
          changeView={changeView}
          businessObjectSummary={businessObjectSummary}
          businessId={businessId}
          changeId={changeId}
          />
      </div>
    );
  } else if(view === 'businessProfileSummary') {
    return (
      <div className="App">
        <BusinessProfileSummary
          businessObjectSummary={businessObjectSummary}
          changeView={changeView}
          businessId={businessId}
        />
     </div>
    );
  } else if(view === 'businessProfile') {
    return (
      <div className="App">
      <BusinessProfile
        businessObject={businessObject}
        businessId={businessId}
        />
   </div>
    )
  }
}

export default App;



  // const [businessObject, setBusinessObject] = useState()
  // const updateBusinessObject = (busObj) => {
  //   setBusinessObject(businessObject => ({...businessObject, [businessObject]: busObj}))
  // }