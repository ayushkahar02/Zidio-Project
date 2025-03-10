
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';  // connect frontend to backend

// function App() {
 
//   return (
//    <h1 className='text-[red]'>Main App</h1>
//   )
// };

// export default App

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Task from "./pages/Task";
import CompletedTasks from "./pages/CompletedTasks";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<Task />} />
        <Route path="/completedtasks" element={<CompletedTasks />} />
     
    
      </Routes>
    </Router>
  );
};

export default App;

