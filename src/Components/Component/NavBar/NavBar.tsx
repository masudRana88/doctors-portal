

import { FaBars } from "react-icons/fa";
import {  NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { aboutPage, appointmentPage, loginPage, profilePage } from '../../../utils/path/path';
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Redux/store";
import { logoutUser } from "../../../Redux/Slice/userSlice/userSlice";
import { Link } from "react-router-dom";
const NavBar = () => {
    let email: string | any= useSelector<string | any>(state=>state.user.email);
    const [showLogout, setShowLogout] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const hendleLogOut = ()=>{
        dispatch(logoutUser())
        localStorage.removeItem("user")
    }
    return (
        <div className='fixed top-0 left-0 right-0 w-full px-4 pt-4 pb-4 mx-auto bg-white shadow-lg md:pt-5 md:pb-5'>
           <nav className='flex items-center justify-between mx-auto bg-white md:container'>
                <div>
                    <NavHashLink to="/" smooth className='text-lg font-bold'>Doctor Portal</NavHashLink>
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
                                    <NavLink to={profilePage} className="block px-2 py-1 font-medium text-center cursor-pointer hover:bg-slate-400 hover:text-white" onClick={()=>setShowLogout(!showLogout)}>
                                        Profile
                                    </NavLink>
                                    <li className="px-2 py-1 font-medium text-center cursor-pointer hover:bg-slate-400 hover:text-white" onClick={hendleLogOut}>Log out</li>
                                </ul>}
                            </div>}
                    </ul>

                    {/* SM Display */}
                    <div className="flex justify-center md:hidden">
                    <div>
                        <div className="relative dropdown">
                        <button
                            className="
                            dropdown-toggle
                            px-3
                            py-2.5
                            text-black
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                          active:text-black
                            transition
                            duration-150
                            ease-in-out
                            flex
                            items-center
                            whitespace-nowrap
                            "
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FaBars className='text-lg'/>
                        </button>
                        <ul
                            className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            {/* {navManu.map((n)=>(
                                <li key={n.id}><NavHashLink smooth className={`${isActive(n,location) ? "block w-full px-4 py-2 text-sm font-normal text-white  whitespace-nowrap bg-bgGray" : " block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent  whitespace-nowrap hover:bg-gray-100"}`} key={n.id} to={n.link}>{n.name}</NavHashLink></li>
                            ))} */}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
           </nav>
        </div>
    );
};

export default NavBar;