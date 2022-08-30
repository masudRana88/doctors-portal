import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'tw-elements';
import { aboutPage, appointmentPage, homePage, loginPage, profilePage, singUpPage, } from './utils/path/path';
import NavBar from './Components/Component/NavBar/NavBar';
import AppointmentPage from './Components/Pages/AppointmentPage/AppointmentPage';
import Footer from './Components/Component/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import SingUpPage from './Components/Pages/LoginPage/SingUpPage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUserMsg, getUserInfo } from './Redux/Slice/userSlice/userSlice';
import { AppDispatch } from './Redux/store';
import RequireAuth from './Hooks/RequireAuth';
import ProfilePage from './Components/Pages/ProfilePage/ProfilePage';
import Profile from './Components/Component/Profile/Profile';
import Appointments from './Components/Component/Profile/Appointments/Appointments';
import AllAppoinments from './Components/Component/AllAppoinments/AllAppoinments';
import AllUsers from './Components/Component/AllUsers/AllUsers';
import MakeAdmin from './Components/Component/MakeAdmin/MakeAdmin';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  // chack is user is logged in
  
  useEffect(() => {
      dispatch(getUserInfo());
      dispatch(clearUserMsg());

  },[])
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path={homePage} element={<HomePage/>}/>
          <Route path={appointmentPage} element={<RequireAuth><AppointmentPage/></RequireAuth>}/>
          <Route path={aboutPage} element={<AboutPage />}/>
          <Route path={loginPage} element={<LoginPage />}/>
          <Route path={singUpPage} element={<SingUpPage />}/>
          <Route path={profilePage} element={<ProfilePage />}>
            <Route path='profile' element={<Profile />}/>
            <Route path='appoinments' element={<Appointments />}/>
            <Route path='all-appoinments' element={<RequireAuth><AllAppoinments/></RequireAuth>}/>
            <Route path='all-users' element={<RequireAuth><AllUsers/></RequireAuth>}/>
            <Route path='make-admin' element={<RequireAuth><MakeAdmin/></RequireAuth>}/>
            <Route path='*' element={<Profile />}/>
          </Route>
      </Routes>
      <Footer/>   
    </div>
  );
}

export default App;
