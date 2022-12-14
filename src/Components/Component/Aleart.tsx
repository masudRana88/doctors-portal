import React, { useEffect, useState } from 'react';
import { MdWarning ,MdClose} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteAppointments } from '../../Redux/Slice/AppoinmentSlice/allAppointmentSlice';
import { deleteUserAppointments } from '../../Redux/Slice/AppoinmentSlice/userAppoinmentSlice';
import { deleteUsers } from '../../Redux/Slice/userSlice/allUsersSlice';
import { AppDispatch } from '../../Redux/store';

const Aleart = ({aleart,setAleart,deletId,setDeletId,body,title,worning,isUserAppointmnet,isAppoinment,isUser}: props) => {
   
    const dispatch = useDispatch<AppDispatch>()

    if(!aleart){
        return null
    }
    const handleDelete = ()=>{
        if(isAppoinment){
            dispatch(deleteAppointments(deletId))
        }if (isUserAppointmnet) {
            dispatch(deleteUserAppointments(deletId))
        } else {
            dispatch(deleteUsers(deletId))
        }
        setDeletId("")
    }
   
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center px-4 modal bg-modalBg' 
        onClick={()=>setAleart(false)}>
            {/* Modal container */}
           <div className="bg-white w-[500px]  p-3 rounded-2xl" onClick={(e)=> e.stopPropagation()}>
                {/* Header */}
                <div className='flex items-center justify-between mb-5'>
                    {/* Title */}
                    <h4 className='inline-block text-xl font-semibold text-yellow-500'>{worning && <MdWarning className='inline mr-2 text-2xl text-yellow-500'/>}{title}</h4><h4 className='inline-block text-xl font-semibold text-black'></h4>
                    <div className='inline-block p-1 rounded-full cursor-pointer bg-slate-400' onClick={()=>setAleart(false)}><MdClose className='text-2xl text-white'/></div>
                </div>
                {/* Body */}
                <div>
                    <p className='px-3 text-lg font-medium'>{body}</p>
                    <div onClick={()=>setAleart(false)} className='flex justify-end gap-1 items-container'>
                        <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                            No
                        </button>
                        <button onClick={handleDelete} type="button" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                            Yes
                        </button>
                    </div>
                </div>
           </div>
        </div>
    );
};


type props ={
    aleart: boolean,
    deletId: string,
    title: string,
    setAleart: (value: boolean) => void,
    setDeletId: (value: string) => void,
    body: string,
    worning: boolean,
    isUserAppointmnet:boolean,
    isAppoinment : boolean,
    isUser : boolean,
}

export default Aleart;