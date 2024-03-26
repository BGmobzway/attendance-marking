// Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';
import './db.css'
export const Dashboard = () => {
  const [classes, setClasses] = useState([]);
  const Navigate = useNavigate()

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const configurationClass = {
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}getclasses`
        }
        const responseClasses = await axiosInstance(configurationClass)
        console.log(responseClasses.data.class, "&&&&&&&&")
        setClasses(responseClasses.data.class)

      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchClasses();
  }, []);
  const handleClassClick = (classId) => {
    Navigate(`/ClassDetails/${classId}`)
    // Handle click action when a class button is clicked
    // For now, you can log the classId to console
    console.log('Class clicked:', classId);
  };

  return (
    <div>
      <h2>All Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>
            <button className="class-button" onClick={() => handleClassClick(cls.className)}>{cls.className}</button>
            {/* Display class name as button */}
          </li>
        ))}
      </ul>
      
    </div>
  );
};


