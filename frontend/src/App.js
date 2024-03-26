// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
import { Signup } from './component/Signup';

import { Dashboard } from './component/dashboard';
import { ClassDetails } from './component/studentlist';
function App() {
  return (
    
      <div>
        <Routes>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" element={<Signup/>}></Route>
          <Route path = '/dashboard' element = {<Dashboard/>}></Route>
          <Route path = '/ClassDetails/:classId' element = {<ClassDetails/>}></Route>
        </Routes>
      </div>
    
  );
}

export default App;

