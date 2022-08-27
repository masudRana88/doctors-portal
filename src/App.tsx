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
import { clearUserMsg, loginUserWithToken } from './Redux/Slice/userSlice/userSlice';
import { AppDispatch } from './Redux/store';
import RequireAuth from './Hooks/RequireAuth';
import ProfilePage from './Components/Pages/ProfilePage/ProfilePage';
import Profile from './Components/Component/Profile/Profile';
import Appointments from './Components/Component/Profile/Appointments/Appointments';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  // chack is user is logged in
  const token: string | any = useSelector<any>(state=> state.user.jwt)
  
  useEffect(() => {
    if(token && token.startsWith("Bearer")){
      dispatch(loginUserWithToken(token));
      dispatch(clearUserMsg());
    }
  },[])
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path={homePage} element={<HomePage/>}/>
          <Route path={appointmentPage} element={<RequireAuth>
              <AppointmentPage></AppointmentPage>
          </RequireAuth>}/>
          <Route path={aboutPage} element={<AboutPage />}/>
          <Route path={loginPage} element={<LoginPage />}/>
          <Route path={singUpPage} element={<SingUpPage />}/>
          <Route path={profilePage} element={<ProfilePage />}>
            <Route path='profile' element={<Profile />}/>
            <Route path='appoinments' element={<Appointments />}/>
          </Route>
      </Routes>
      <Footer/>   
    </div>
  );
}

export default App;
