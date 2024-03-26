import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom'
import { CalendarView } from './calander';

export const ClassDetails = () => {
    const { classId } = useParams()
    console.log("sassssa", classId)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [students, setStudents] = useState([]);
    const [overallAttendance, setOverallAttendance] = useState({});
    const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const configurationStudents = {
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}students/${classId}`
        }
        const responseStudents = await axiosInstance(configurationStudents);
        console.log("&&&&&&&&&&&&&&", responseStudents)
        setStudents(responseStudents.data.students); // Update state with students data
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchStudents();
  }, [classId]);
  useEffect(() => {
    // Fetch attendance data for the selected date
    const fetchAttendanceData = async () => {
    //   try {
    //     const response = await axiosInstance.get(`/attendance/${classId}/${selectedDate}`);
    //     setAttendanceData(response.data.attendance);
    //   } catch (error) {
    //     console.error('Error fetching attendance data:', error);
    //   }
    };

    fetchAttendanceData();
  }, [classId, selectedDate]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Handle attendance change for a student

  const handleAttendanceChange = async (studentId, status) => {
    // Handle attendance change for a student
    // You can implement this function to update the attendance state
    // and save it to the backend API
    try {
        const response = await axiosInstance.post('/attendancemarking', {
            studentId,
            date: selectedDate,
            status
        });
        console.log(response.data.message);
    } catch (error) {
        console.error('Error marking attendance:', error);
    }

  };

  return (
    <div>
      <h2>Class Details</h2>
      <CalendarView handleDateClick={handleDateClick} />
      <h3>Attendance for {selectedDate.toDateString()}</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>
                <select onChange={(e) => handleAttendanceChange(student._id, e.target.value)}>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};