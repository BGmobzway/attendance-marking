// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
import { Signup } from './component/Signup';

function App() {
  return (
    
      <div>
        <Routes>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" element={<Signup/>}></Route>
        </Routes>
      </div>
    
  );
}

export default App;

