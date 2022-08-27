import React, { useEffect, useState } from 'react';
import { MdWarning ,MdClose} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { makeAppointment } from '../../../Redux/Slice/AppoinmentSlice/createAppoinmentSlice';
import { AppDispatch, RootState } from '../../../Redux/store';

const Modal = ({show,setShow,time,slotsName,selectedDate}: props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState<number | null>(null);
    const [userId, setUserId] = useState("");

    const user = useSelector((state: RootState)=> state.user)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setUserId(user.id)
    },[user.email])

    if(!show){
        return null
    }

    const habdleSubmit =(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setShow(false)
        const doc= {
            name: name,
            email: email,
            phone: phone,
            userId: userId,
            date : selectedDate,
            time : time,
            serviceName :slotsName
        }
        dispatch(makeAppointment(doc))
    }
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center px-4 modal bg-modalBg' 
        onClick={()=>setShow(false)}>
            {/* Modal container */}
           <div className={`${selectedDate === ''? "bg-yellow-500" : "bg-white "} w-[500px]  p-3 rounded-2xl`} onClick={(e)=> e.stopPropagation()}>
                {/* Header */}
                <div className='flex items-center justify-between mb-5'>
                    {/* Title */}
                    {selectedDate==="" ? <h4 className='inline-block text-xl font-semibold text-white'><MdWarning className='inline mr-2 text-2xl text-white'/>Warning</h4>:<h4 className='inline-block text-xl font-semibold text-black'>{slotsName}</h4>}
                    <div className='inline-block p-1 rounded-full cursor-pointer bg-slate-400' onClick={()=>setShow(false)}><MdClose className='text-2xl text-white'/></div>
                </div>
                {/* Body */}
                {selectedDate===""? <div>
                    <p className='px-3 text-lg font-medium'>Please Seleate a Date, For Appoinment</p>
                </div> : <div className=''>
                    <form onSubmit={habdleSubmit}>
                        {/* Date */}
                        <input
                            type="text"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Date"
                            value={selectedDate}
                            disabled
                            required
                            />
                        {/* Time */}
                        <input
                            type="text"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Time"
                            required
                            value={time}
                            disabled
                            />
                        {/* Name */}
                        <input
                            type="text"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Full name"
                            required
                            defaultValue={name}
                            onBlur={(e)=> setName(e.target.value)}
                            />
                        {/* email */}
                        <input
                            type="email"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Your Email"
                            required
                            defaultValue={email}
                            onBlur={(e)=> setEmail(e.target.value)}
                            />
                        {/* phone */}
                        <input
                            type="number"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Your Phone number"
                            required
                            defaultValue={phone? phone :""}
                            onBlur={(e)=> setPhone(Number(e.target.value))}
                            />
                        <input type='submit' value="submit" className='w-full py-2 text-white cursor-pointer rounded-xl bg-bgGray'/>
                    </form>
                </div>}
           </div>
        </div>
    );
};


type props ={
    show: boolean,
    time: string,
    setShow: (value: boolean) => void,
    slotsName: string,
    selectedDate : string 
}

export default Modal;