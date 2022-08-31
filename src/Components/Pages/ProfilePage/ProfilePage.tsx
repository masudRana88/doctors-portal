import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { RootState } from '../../../Redux/store'
import Button from '../../Component/Button'
export default function ProfilePage() {
  const admin = useSelector((state:RootState)=> state.user.isAdmin)
  return (
    <div className='mt-[66px] md:flex '>
        <div className="md:w-[15%] px-2 w-full pb-5 hidden md:h-screen font-medium bg-slate-200 md:flex flex-col pt-5 ">
          <NavLink to="profile" className="inline-block w-full px-2 py-2 mt-2 font-medium leading-tight text-center text-white duration-75 rounded-md bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">Profile</NavLink>
          <NavLink to="appoinments" className="inline-block w-full px-2 py-2 mt-2 font-medium leading-tight text-center text-white duration-75 rounded-md bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">My Appointment</NavLink>
          {
            admin && <>
              <NavLink to="all-appoinments" className="inline-block w-full px-2 py-2 mt-2 font-medium leading-tight text-center text-white duration-75 rounded-md bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">All Appointment</NavLink>
              <NavLink to="all-users" className="inline-block w-full px-2 py-2 mt-2 font-medium leading-tight text-center text-white duration-75 rounded-md bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">All user</NavLink>
              <NavLink to="make-admin" className="inline-block w-full px-2 py-2 mt-2 font-medium leading-tight text-center text-white duration-75 rounded-md bg-gradient-to-bl from-bgGreenR to-bgGreenL active:scale-95">make admin</NavLink>
            </>
          }
        </div>
        <div className='md:w-[85%] w-full'>
          <Outlet />
        </div>
    </div>
  )
}
