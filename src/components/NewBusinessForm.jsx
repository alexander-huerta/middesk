import '../App.css';
import { addBusiness } from '../api/postData.js';
import { newBusiness } from '../sampleData/sampleNewBusiness.js'

const NewBusinessForm = ({setView, setId, setBusinessObjectSummary}) => {
  //Instead of capturing the form data, the app is currently working with a sample business being imported as newBusiness

  const handleSubmit = (e) => {
    e.preventDefault();
    addBusiness(newBusiness, (objectSummary) => {
      setView('businessProfileSummary')
      setId(objectSummary.id)
      setBusinessObjectSummary(objectSummary)
    })
  }

  return (
    <div className="form-box">
      <h5> Add a business </h5>
      <form
        className = "submitBusinessForm"
        onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value="Business Name"/>

        <input
          type="text"
          value="Tax Payer ID"/>

        <input
          type="text"
          value="Website URL"/>

        <input
          type="text"
          value="Address Line 1"/>

        <input
          type="text"
          value="Address Line 2"/>

        <input
          type="text"
          value="City"/>

        <input
          type="text"
          value="State"/>

        <input
          type="text"
          value="Postal Code"/>

        <input
          type="submit"
          value="Submit"
          className="button"/>

      </form>
    </div>
  );
}

export default NewBusinessForm;
