import '../App.css';
import { addBusiness } from '../api/postData.js';

const NewBusinessForm = ({businessObjectSummary, changeView, businessId, changeId}) => {
  // const handleChange = (e) => {
    //   console.log(e.target.value)
    //   setName(e.target.value)
    // }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBusiness(businessObjectSummary, (id) => {
      changeView('businessProfileSummary')
      changeId(id)
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
