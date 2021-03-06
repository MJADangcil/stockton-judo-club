import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Membership from './pages/Membership/Membership';
import Instructors from './pages/Instructors/Instructors';
import ContactInfo from './pages/ContactInfo/ContactInfo';
import UsefulLinks from './pages/UsefulLinks/UsefulLinks';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{ display: 'table', position: 'relative', minHeight: '100vh' }}
      >
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='/contact-info' element={<ContactInfo />} />
          <Route path='/useful-links' element={<UsefulLinks />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
