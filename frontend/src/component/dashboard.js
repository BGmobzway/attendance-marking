// Dashboard.js
import React, { useState, useEffect } from 'react';
import api from './api';

const Dashboard = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>
            <button onClick={() => handleClassClick(cls._id)}>{cls.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
