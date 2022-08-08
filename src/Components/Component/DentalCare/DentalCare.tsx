import React from 'react';
import treatment from "./../../../images/images/treatment.png"
const DentalCare = () => {
    return (
        <section className='container flex flex-col h-full px-4 pt-10 mx-auto mb-10 md:mb-16 md:pt-16 md:flex-row'>
            <div className='flex items-center justify-center w-full md:w-2/4'>
                <img src={treatment} alt="" className='w-[322px] h-[4-8px] md:w-[458px] md:h-[576px] rounded-md hover:shadow-2xl transition ease-out delay-150'/>
            </div>
            <div className='flex flex-col items-start justify-center w-full mt-10 md:w-2/4 md:mt-0'>
                    <h2 className='mb-3 text-4xl font-bold text-textColorH'>Your New Smile Starts Here</h2>
                    <p className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className='px-4 py-2.5 rounded-md font-semibold text-white bg-gradient-to-bl from-bgGreenR to-bgGreenL hover:shadow-md transition delay-100'>GET STARTED</button>
            </div>
        </section>
    );
};

export default DentalCare;