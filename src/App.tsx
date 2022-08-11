import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'tw-elements';
import { aboutPage, appointmentPage, homePage } from './utils/path/path';
import NavBar from './Components/Component/NavBar/NavBar';
import AppointmentPage from './Components/Pages/AppointmentPage/AppointmentPage';
import Footer from './Components/Component/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path={homePage} element={<HomePage/>}/>
          <Route path={appointmentPage} element={<AppointmentPage />} />
          <Route path={aboutPage} element={<AboutPage />} />
      </Routes>
      <Footer/>   
    </div>
  );
}

export default App;
