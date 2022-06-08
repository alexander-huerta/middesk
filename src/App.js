import { useState } from 'react';
import './App.css';
import {API_KEY} from './apiKey.js'

const App = () => {

  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName('');
  }


  return (
    <div className="App">
      <h1> Loan Underwriting </h1>
      <form onSubmit={handleSubmit}>
       <label>
         Business Name:
       <input type="text" name="name" onChange={handleChange} value={name}/>
       </label>
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
