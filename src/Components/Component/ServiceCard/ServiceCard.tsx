import React from 'react';
import fluoride from "./../../../images/images/fluoride.png"
import whitening from "./../../../images/images/whitening.png"
import cavity from "./../../../images/images/cavity.png"
const ServiceCard = () => {
    return (
        <section className='w-full h-full mb-20 mt-28'>
            <div className='flex flex-col items-center'>
                <h3 className='mb-2 text-xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-bgGreenL to-bgGreenR'>OUR SERVICES</h3>
                <h4 className='mb-10 text-4xl font-normal'>Services We Provide</h4>
            </div>
            {/* Card */}
            <div className='flex flex-wrap items-center justify-center w-full h-full gap-4'>
                <div className='flex flex-col items-center justify-center px-6 h-[340px]  w-[440px] rounded-xl shadow-cardShadow'>
                    <img src={fluoride} alt="" className='mb-6 w-36 h-36'/>
                    <h4 className='mb-2 text-xl font-semibold text-textColorH'>Fluoride Treatment</h4>
                    <p className='text-center '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div className='flex flex-col items-center justify-center px-6 h-[340px]  w-[440px] rounded-3xl shadow-cardShadow'>
                    <img src={cavity} alt="" className='mb-6 w-36 h-36'/>
                    <h4 className='mb-2 text-xl font-semibold text-textColorH'>Cavity Filling</h4>
                    <p className='text-center '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div className='flex flex-col items-center justify-center px-6 h-[340px]  w-[440px] rounded-3xl shadow-cardShadow'>
                    <img src={whitening} alt="" className='mb-6 w-36 h-36'/>
                    <h4 className='mb-2 text-xl font-semibold text-textColorH'>Teeth Whitening</h4>
                    <p className='text-center '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;