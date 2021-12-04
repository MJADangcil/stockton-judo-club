import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ClassSchedule from './pages/ClassSchedule/ClassSchedule';
import Membership from './pages/Membership/Membership';
import Instructors from './pages/Instructors/Instructors';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/class-schedule' element={<ClassSchedule />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='/contact-info' element={<ContactInfo />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
