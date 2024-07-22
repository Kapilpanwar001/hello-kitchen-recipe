import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbarh from './Navbarh';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://kitchenbackend.onrender.com/api/auth/signup', formData);
      console.log(response.data);
      setSuccessMessage('Registration successful!'); // Set success message
      setErrorMessage(''); // Clear any existing error message
      navigate('/Login'); // Redirect to the Login component after successful signup
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 400 && error.response.data.message === 'User already exists') {
        setErrorMessage('User already exists Click on Login'); // Set error message if user already exists
      } else {
        setErrorMessage('An error occurred'); // Set generic error message
      }
      setSuccessMessage(''); // Clear any existing success message
    }
  };

  return (
    <>
      <Navbarh/>
      <div className="flex justify-center items-center h-screen bg-yellow-200">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full">
          {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>} {/* Show error message */}
          {successMessage && <p className="text-green-500 text-xs italic">{successMessage}</p>} {/* Show success message */}
          <h1 className='text-blue-700 pl-48 text-lg font-bold pb-6'>Register Here</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Signup
              </button>
              <h1 className='text-blue-700 font-bold'>or</h1>
              <h1>already registered click</h1>
              <NavLink className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/Login">
                <button>Login</button> 
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
