// components/Signup.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export const Signup = () => {
  const history= useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const configurationsignup = {
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}signup`,
        data: {
            name,
            email,
            password
        }
      }
      console.log(process.env.API_URL)
      const response = await axios(configurationsignup)
      const token = response.data.token;
      localStorage.setItem('token', token)
      console.log('local storage:', token)
      console.log(response, 'signupchecking')
      history('/dashboard');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};


