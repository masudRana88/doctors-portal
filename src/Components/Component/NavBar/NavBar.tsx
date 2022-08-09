
import { NavLink, useLocation, } from 'react-router-dom';
import { navManu } from '../../../utils/path/navBar/navManu';
import { FaBars } from "react-icons/fa";
import { aboutPage, appointmentPage, loginPage } from '../../../utils/path/path';
import {  NavHashLink } from 'react-router-hash-link';
const NavBar = () => {
    const location = useLocation()
    const isActive =(n:{link:string}, location:{pathname:string; hash:string}) => {
        const link = n.link;
        const hash = "/"+location.hash;
        return (location.pathname === link ) || (link === hash )
    }
    return (
        <div className='fixed top-0 left-0 right-0 w-full px-4 pt-4 pb-4 mx-auto bg-white shadow-lg md:pt-5 md:pb-5'>
           <nav className='flex items-center justify-between mx-auto md:container'>
                <div>
                    <samp className='text-lg font-bold'>Doctor Portal</samp>
                </div>
                <div>
                    {/* MD display */}
                    <ul className='hidden md:flex'>
                        
                        {
                            navManu.map(n=>(
                            <li>
                                <NavHashLink smooth key={n.id} to={n.link} className={`${ isActive(n,location)? "px-2 py-2 mr-4 text-white bg-slate-600 rounded-md ": "px-2 py-2 mr-4 text-black rounded-md "}`}>
                                   {n.name}
                                 </NavHashLink>
                            </li>
                            ))
                        }
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
                            {navManu.map(n=>(
                                <li><NavHashLink smooth className={`${isActive(n,location) ? "block w-full px-4 py-2 text-sm font-normal text-white  whitespace-nowrap bg-bgGray" : " block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent  whitespace-nowrap hover:bg-gray-100"}`} key={n.id} to={n.link}>{n.name}</NavHashLink></li>
                            ))}
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