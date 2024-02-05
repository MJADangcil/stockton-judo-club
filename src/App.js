import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Membership from './pages/Membership/Membership';
import Instructors from './pages/Instructors/Instructors';
import ScheduleAndContactInfo from "./pages/ScheduleAndContactInfo/ScheduleAndContactInfo";
import UsefulLinks from './pages/UsefulLinks/UsefulLinks';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{ display: "table", position: "relative", minHeight: "100vh" }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/schedule-and-contact-info" element={<ScheduleAndContactInfo />} />
          <Route path="/useful-links" element={<UsefulLinks />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
