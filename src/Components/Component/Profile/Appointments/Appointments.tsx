import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearAppointmentMsg, getUserAppointments } from '../../../../Redux/Slice/AppoinmentSlice/userAppoinmentSlice'
import { AppDispatch, RootState } from '../../../../Redux/store'
import { MdOutlineClose } from "react-icons/md";
import Message from '../../Message'
import Aleart from '../../Aleart'
export default function Appointments() {

  // type
  type appointmentType = {
    _id: string;
    name: string;
    email: string;
    phone: number|null|string;
    date: string;
    time: string;
    status: string;
    serviceName: string;
    userId : string;
    __v: number;
  }
    const [aleart,setAleart]= useState(false);
    const [deletId, setDeletId]= useState("");
    const dispatch = useDispatch<AppDispatch>()
    const userId = useSelector((state:RootState)=> state.user.id)
    const appointments = useSelector((state:RootState)=> state.userAppoinment.appointments)
    const msg = useSelector((state:RootState)=> state.userAppoinment.message)
    useEffect(() => {
        dispatch(getUserAppointments(userId))
    },[userId])
    if(msg){
      setTimeout(() => {
        dispatch(clearAppointmentMsg())
      }, 3000);
    }

    const handleDelete = async(e: React.FormEvent<HTMLFormElement>,id:string) =>{
        e.preventDefault();
        setDeletId(id)
        setAleart(true)
    }
  return (
    <div className='w-full h-full mx-auto'>
        <div className='p-5 pt-8 pb-8 mx-5 mt-5 rounded-md shadow md:w-5/6 bg-slate-100'>
            <h3 className='mb-3 text-xl'>My Appoinments :</h3>
            {msg && <Message>{msg}</Message>}
            {appointments.length === 0 && <div className="px-6 py-5 mb-3 text-base text-blue-700 bg-blue-100 rounded-lg" role="alert">Emty</div>}
            {appointments.map((appointment:appointmentType)=>
              <div className="flex items-center justify-between px-6 py-5 mb-4 text-base text-indigo-400 bg-indigo-100 rounded-lg" >
                <div>
                  <h4 className='mb-2 text-lg font-semibold'>{appointment.serviceName}</h4>
                  <p><span className="font-semibold">Date: </span> {appointment.date}</p>
                  <p><span className="font-semibold">Time: </span> {appointment.time}</p>
                  <span className={`${appointment.status === "panding" ? "bg-yellow-200": appointment.status === "approved"? "bg-green-200":"bg-red-200"} flex px-2 py-1 mt-2 text-sm text-gray-500 transition duration-300 rounded-full cursor-pointer align-center w-max active:bg-gray-300 ease`}>
                    {appointment.status}
                  </span>
                </div>
                <div>
                  <button type="button" className="flex gap-1 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={(e:any) => handleDelete(e,appointment._id)}>
                    Cancle <MdOutlineClose className="text-lg"/>
                  </button>
                </div>
              </div>
            )}
        </div>
        {aleart && <Aleart aleart={aleart} setAleart={setAleart} deletId={deletId} setDeletId={setDeletId} title="Worning !!" body='You wnates to Cancle your Appoinment ? If you cancle it will be DELETE permanently. You can not it back again. So be cearfull.' worning={true} isUserAppointmnet={true} isAppoinment={false} isUser={false} />}
    </div>
  )
}
