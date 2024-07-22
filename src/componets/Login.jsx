import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbarh from './Navbarh';


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://kitchenbackend.onrender.com/api/auth/login', formData);
      console.log(response.data);
      localStorage.setItem('token', response.data.token); // Store the token
      setErrorMessage('');
      alert('User logged in successfully');
      navigate('/Open'); // Redirect to the Open component after successful login
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      if (error.response && error.response.status === 400 && error.response.data.message === 'Invalid credentials') {
        setErrorMessage('Wrong email or password');
      } else {
        setErrorMessage('An error occurred');
      }
    }
  };

  return (
    <>
      <Navbarh />
      <div className="flex justify-center items-center h-screen bg-yellow-200">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full">
          {errorMessage && <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>}
          <h1 className='text-blue-700 pl-48 text-lg font-bold pb-6'>Login Here</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="flex items-center justify-between mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Login
              </button>
              <div>or</div>
              <NavLink className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/Signup">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Signup</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
