import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import Button from '../Button';
import Modal from '../Modal/Modal';


const AvailableSlots = ({slots}:props) => {
    const [name,setName] = useState('')
    const [time,setTime] = useState("")
    const [showModal,setShowModal] = useState(false)
    const selectedDate = useSelector((staet: RootState)=> staet.date.selectedDate)
    useEffect(()=>{
        setName(slots.name)
    },[slots])

    const handleBook =(s: {time: string, site:number})=>{
        setTime(s.time)
        setShowModal(!showModal)
    }
    return (
    <div className='px-4 mt-28'>
        <h3 className='mb-2 text-xl font-semibold text-center text-bgGreenL'>Available slots for {name}.</h3>
        <div className='grid grid-cols-1 px-4 mt-10 md:grid-cols-3 md:px-10 gap-7'>
            {
               slots.avalibleSit.map((s,index)=>(
                <div key={index} className='flex flex-col items-center justify-center px-10 py-10 md:px-32 rounded-2xl shadow-cardShadow'>
                    <span className='mb-2 text-lg font-semibold text-bgGreenL'>{name}</span>
                    <p className='mb-2 text-base text-bgGray'>{s.time}</p>
                    <p className='mb-2 text-base text-bgGray'>{s.site} Sites Available</p>
                    <span onClick={()=>handleBook(s)}><Button>Book Appointment</Button></span>
                </div>
                ))
            }
        </div>
        {/* Modal */}
        <Modal show={showModal} setShow={setShowModal} time={time} name={name} selectedDate={selectedDate}/>
    </div>
    );
};

type props ={
 slots: {
    id: number, 
    name : string,
    avalibleSit: {time: string, site:number}[]
    }

}
export default AvailableSlots;