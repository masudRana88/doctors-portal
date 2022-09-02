

import { FaBars } from "react-icons/fa";
import {  NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { aboutPage, allAppointmentsLink, allUsersPageLink, appointmentPage, loginPage, makeAdminPageLink, myAppointmentPageLink, profilePageLink } from '../../../utils/path/path';
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/store";
import { logoutUser } from "../../../Redux/Slice/userSlice/userSlice";
import { Link } from "react-router-dom";
import { clearLocalStorage } from "../../../Hooks/clearLocalStorage";
const NavBar = () => {
    let email: string | any= useSelector<string | any>(state=>state.user.email);
    let isAdmin= useSelector<string | any>(state=>state.user.isAdmin);
    const [showLogout, setShowLogout] = useState(false)
    const [mobileManu, setMobileManu] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const hendleLogOut = ()=>{
        dispatch(logoutUser())
        clearLocalStorage()
    }
    const hendleMobileMane = ()=>{
        setMobileManu(!mobileManu)
    }
    return (
        <div className='fixed top-0 left-0 right-0 bg-white shadow-lg w-fullmx-auto md:pt-5 md:pb-5'>
           <nav >
            <div className='flex items-center justify-between px-2 mx-auto bg-white md:container'>
                <div>
                    <NavHashLink to="/" smooth className='text-lg font-bold'>Doctor <span className="px-2 py-1 font-semibold text-white bg-gray-700 rounded-md">Portal</span></NavHashLink>
                </div>
                <div>
                    {/* MD display */}
                    <ul className='hidden md:flex'>
                        <li><NavHashLink smooth to="/#home" className="px-2 py-2 mr-4 text-black rounded-md" >Home</NavHashLink></li>
                        <li><NavLink to={aboutPage} className="px-2 py-2 mr-4 text-black rounded-md" >About</NavLink></li>
                        <li><NavLink to={appointmentPage} className="px-2 py-2 mr-4 text-black rounded-md" >Appointment</NavLink></li>
                        <li><NavHashLink smooth to="/#contactus"  className="px-2 py-2 mr-4 text-black rounded-md">Contuct</NavHashLink></li>
                        {!email ?
                            <li><NavLink to={loginPage} className="px-2 py-2 mr-4 text-black rounded-md" >
                                Login</NavLink>
                            </li>: 
                            <div className="relative">
                                <div className="flex items-center h-full cursor-pointer justify-content" onClick={()=>setShowLogout(!showLogout)}>
                                    <MdAccountCircle className="text-2xl"/>
                                </div>
                                {showLogout && <ul className="absolute py-2 rounded-lg shadow -right-3 w-36 bg-slate-50">
                                    <NavLink to={profilePageLink} className="block px-2 py-1 font-medium text-center cursor-pointer hover:bg-slate-400 hover:text-white" onClick={()=>setShowLogout(!showLogout)}>
                                        Profile
                                    </NavLink>
                                    <li className="px-2 py-1 font-medium text-center cursor-pointer hover:bg-slate-400 hover:text-white" onClick={hendleLogOut}>Log out</li>
                                </ul>}
                            </div>}
                    </ul>

                </div>
                    {/* SM Display */}
                   <FaBars className="m-2 mt-4 mb-4 text-2xl md:hidden" onClick={hendleMobileMane}/>
            </div>
            <ul className={`absolute ${mobileManu ? "": "hidden"} w-full px-4 py-4 bg-slate-200`}>
                <NavHashLink to="/#home"><li className="px-2 py-2 hover:bg-slate-300">Home</li></NavHashLink>
                <NavLink to={aboutPage}><li className="px-2 py-2 hover:bg-slate-300">About</li></NavLink>
                <NavLink to={appointmentPage}><li className="px-2 py-2 hover:bg-slate-300">Appointment</li></NavLink>
                <NavHashLink smooth to="/#contactus"><li className="px-2 py-2 hover:bg-slate-300">Contuct</li></NavHashLink>
                {!email ? <>
                    <NavLink to={loginPage}><li className="px-2 py-2 hover:bg-slate-300">Login</li></NavLink>
                </>: <>
                <NavLink to={profilePageLink}><li className="px-2 py-2 hover:bg-slate-300">Profile</li></NavLink>
                <NavLink to={myAppointmentPageLink}><li className="px-2 py-2 hover:bg-slate-300">My Appointment</li></NavLink>
                    {isAdmin && <>
                        <NavLink to={allAppointmentsLink}><li className="px-2 py-2 hover:bg-slate-300">All Appointment</li></NavLink>
                        <NavLink to={allUsersPageLink}><li className="px-2 py-2 hover:bg-slate-300">All User</li></NavLink>
                        
                    </>}
                </>}
            </ul>
           </nav>
        </div>
    );
};

export default NavBar;