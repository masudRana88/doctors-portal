import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../../Component/Button'

export default function ProfilePage() {
  return (
    <div className='mt-[66px] flex'>
        <div className="w-[15%] h-screen  bg-slate-200 flex flex-col pt-5 px-2">
          <NavLink to={"appoinment"} className="w-full py-2 mt-2 text-center text-white bg-gradient-to-bl from-bgGreenR to-bgGreenL">My Appoinment</NavLink>
          <NavLink to={"profile"} className="w-full py-2 mt-2 text-center text-white bg-gradient-to-bl from-bgGreenR to-bgGreenL">Profile</NavLink>
        </div>
        <div className='w-[85%]'>
          <Outlet />
        </div>
    </div>
  )
}
