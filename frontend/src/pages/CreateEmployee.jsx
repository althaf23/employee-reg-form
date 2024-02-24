import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [employee_id, setEmployee_id] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const [dob, setDob] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://employee-reg-form.onrender.com/create_employees', {
        name,
        email,
        phone,
        dob,
        employee_id,
        address,
        designation,
        salary,
        experience,
      });
      alert('Employee added successfully');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add employee');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <div className='dob'>
        <label htmlFor="dobInput">Enter DOB:</label>
        <br />
        <input
          id="dobInput"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        </div>
        <br />
        <input
          type="text"
          placeholder="employee_id"
          value={employee_id}
          onChange={(e) => setEmployee_id(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
