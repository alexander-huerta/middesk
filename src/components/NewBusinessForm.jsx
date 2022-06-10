import { useState } from 'react';
import '../App.css';
import { addBusiness } from '../api/postData.js';

const NewBusinessForm = ({businessObject, changeView}) => {
  // const handleChange = (e) => {
    //   console.log(e.target.value)
    //   setName(e.target.value)
    // }

  const [formSubmitted, setFormStatus] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus(true);
    addBusiness(businessObject)
  }

  const handleClick = (e) => {
    changeView('businessProfile')
  }

  if(!formSubmitted) {
    return (
      <div >
        <h1> Add a business </h1>
        <form
          className = "submitBusinessForm"
          onSubmit={handleSubmit}>

          <label>
            Business Name:
          <input
            type="text"
            name="name"
            value="Mid Desk"/>
          </label>

          <label>
            Tax Payer ID:
          <input
            type="text"
            value="123410000"/>
          </label>

          <label>
            Website:
          <input
            type="text"
            value="https://www.middesk.com"/>
          </label>

          <label>
            Address Line 1:
          <input
            type="text"
            value="577 Howard St"/>
          </label>

          <label>
            Address Line 2:
          <input
            type="text"
            value="Suite 400"/>
          </label>

          <label>
            City:
          <input
            type="text"
            value="San Fransisco"/>
          </label>

          <label>
            State:
          <input
            type="text"
            value="CA"/>
          </label>

          <label>
            Postal Code:
          <input
            type="text"
            value="94105"/>
          </label>

          <input
            type="submit"
            value="POST BUSINESS REQUEST to API"
            className="button"/>

        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h3> Business Added Successfuly </h3>
        <button
          onClick={handleClick}>
          View business profile
        </button>
      </div>
    )
  }
}

export default NewBusinessForm;
