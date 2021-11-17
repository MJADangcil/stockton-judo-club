import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ClassSchedule from './pages/ClassSchedule';
import Membership from './pages/Membership';
import Instructors from './pages/Instructors';
import ContactInfo from './pages/ContactInfo';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/class-schedule' element={<ClassSchedule />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='/contact-info' element={<ContactInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
