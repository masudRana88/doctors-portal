import React, { useState } from 'react';
import { services } from '../../../utils/availableServices/availableServices';
import AvailableSlots from '../AvailableSlots/AvailableSlots';


const AvailableServices = () => {
    const [slots, setSlots] = useState(services[0])

    return (
        <div className='w-full mt-16'>
            <h3 className='mb-2 text-2xl font-bold text-center text-bgGreenL'>Available Services on April 30, 2022</h3>
            <p className='text-base font-normal text-center text-textColorH'>Please select a service.</p>
            {/* Service manu container */}
            <div className='grid grid-cols-1 px-4 mt-10 md:grid-cols-3 md:px-10 gap-7'>
                {
                    services.map(s=>(
                    <div key={s.id} className='flex items-center justify-center px-10 py-10 cursor-pointer md:px-32 rounded-2xl shadow-cardShadow hover:bg-slate-200' onClick={()=>setSlots(s)}>
                        <span className='text-xl font-semibold text-bgGreenL'>{s.name}</span>
                    </div>
                    ))
                }
            </div>
            <AvailableSlots slots={slots}/>
        </div>
    );
};

export default AvailableServices;