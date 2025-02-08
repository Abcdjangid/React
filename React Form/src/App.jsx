import React, { useState } from 'react';
import './App.css';

// Form component
const App = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    gender: '',
    subject: '',
    resume: '',
    url: '',
    about: '',
  });

  // Handle changes in form inputs
  const handleChanges = (e) => {
    // const { name, type, value, files } = e.target;
    // setValues({ ...values, [name]: type === 'file' ? files[0] : value });

    setValues[{...values, [e.target.name] : e.target.value}]
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);  // Display form values in console
    resetForm();          // Clear form after submission
  };

  // Reset form fields
  const resetForm = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      gender: '',
      subject: '',
      resume: '',
      url: '',
      about: '',
    });
  };

  return (
    <div className='container'>
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>FirstName * : </label>
        <input type='text' placeholder='Enter FirstName' name='firstName' required value={values.firstName} onChange={handleChanges} />

        <label htmlFor='lastName'>LastName * : </label>
        <input type='text' placeholder='Enter LastName' name='lastName' required value={values.lastName} onChange={handleChanges} />

        <label htmlFor='email'>Email : </label>
        <input type='email' placeholder='Enter Mail id' name='email' required value={values.email} onChange={handleChanges} />

        <label htmlFor='number'>Contact : </label>
        <input type='text' name='number' placeholder='Enter Number' required value={values.number} onChange={handleChanges} />

        <label htmlFor='gender'>Gender :</label>
        <input type='radio' name='gender' value='male' checked={values.gender === 'male'} onChange={handleChanges} />Male
        <input type='radio' name='gender' value='female' checked={values.gender === 'female'} onChange={handleChanges} />Female
        <input type='radio' name='gender' value='other' checked={values.gender === 'other'} onChange={handleChanges} />Other

        <label htmlFor='subject'>Subject :</label>
        <select name='subject' id='subject' value={values.subject} onChange={handleChanges}>
          <option value='math'>Math</option>
          <option value='physics'>Physics</option>
          <option value='english'>English</option>
        </select>

        <label htmlFor='resume'>Resume :</label>
        <input type='file' name='resume' onChange={handleChanges} />

        <label htmlFor='url'>URL :</label>
        <input type='text' name='url' placeholder='Enter Image Url' value={values.url} onChange={handleChanges} />

        <label htmlFor='about'>About :</label>
        <textarea name='about' id='about' cols={30} rows={10} placeholder='Write About' required value={values.about} onChange={handleChanges}></textarea>

        <div>
          <button type='button' onClick={resetForm}>Reset</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
