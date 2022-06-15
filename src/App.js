import { useState } from 'react';
import './App.css';
import NewBusinessForm from './components/NewBusinessForm.jsx';
import BusinessProfileSummary from './components/BusinessProfileSummary.jsx';
import BusinessProfile from './components/BusinessProfile.jsx';

const App = () => {
  const [view, setView] = useState();
  const [businessId, setId] = useState();
  const [businessObject, setBusinessObject] = useState();
  const [businessObjectSummary, setBusinessObjectSummary] = useState();

  if(view === 'newBusinessForm') {
    return (
      <div className="App">
        <NewBusinessForm
          setView={setView}
          setId={setId}
          setBusinessObjectSummary={setBusinessObjectSummary}
          />
      </div>
    );
  } else if(view === 'businessProfileSummary') {
    return (
      <div className="App">
        <BusinessProfileSummary
          setView={setView}
          setBusinessObject={setBusinessObject}
          businessId={businessId}
          businessObjectSummary={businessObjectSummary}
        />
     </div>
    );
  } else if(view === 'businessProfile') {
    return (
      <div className="App">
      <BusinessProfile
        businessObject={businessObject}
        businessId={businessId}
        setBusinessObject={setBusinessObject}
        />
   </div>
    )
  }
}

export default App;
