import React, { useState } from 'react';
import AppoinmentBanner from "../../Component/AppoinmentBanner/AppoinmentBanner";
import AvailableServices from "../../Component/AvailableServices/AvailableServices";

const AppointmentPage = () => {
   
    return (
        <div className='mt-[66px]'>
            <AppoinmentBanner/>
            <AvailableServices/>
        </div>
    );
};

export default AppointmentPage;