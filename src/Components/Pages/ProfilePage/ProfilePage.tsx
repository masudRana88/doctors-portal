import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { RootState } from '../../../Redux/store'
import Button from '../../Component/Button'
export default function ProfilePage() {
  const admin = useSelector((state:RootState)=> state.user.isAdmin)
  return (
    <div className='mt-[66px] flex'>
        <div className="w-[15%] h-screen  bg-slate-200 flex flex-col pt-5 px-2">
          <NavLink to="profile" className="w-full py-2 mt-2 text-center text-white duration-75 bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">Profile</NavLink>
          <NavLink to="appoinments" className="w-full py-2 mt-2 text-center text-white duration-75 bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">My Appointment</NavLink>
          {
            admin && <>
              <NavLink to="all-appoinments" className="w-full py-2 mt-2 text-center text-white duration-75 bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">All Appointment</NavLink>
              <NavLink to="all-users" className="w-full py-2 mt-2 text-center text-white duration-75 bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">All user</NavLink>
              <NavLink to="make-admin" className="w-full py-2 mt-2 text-center text-white duration-75 bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">make admin</NavLink>
            </>
          }
        </div>
        <div className='w-[85%]'>
          <Outlet />
        </div>
    </div>
  )
}
