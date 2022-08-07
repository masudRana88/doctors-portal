import React from 'react';
import clock from "./../../../images/icons/clock.svg"
import phone from "./../../../images/icons/phone.svg"
import marker from "./../../../images/icons/marker.svg"
import { MdOutlinePhoneInTalk } from "react-icons/md";
const InfoCard = () => {
    return (
        <section className='flex flex-wrap items-center justify-center w-full h-full gap-4 px-3 mt-10 mb-10'>
            <div className='flex flex-col items-center justify-center gap-3 px-4 py-8 md:flex-row md:py-10 md:px-8 rounded-xl bg-gradient-to-r from-bgGreenL to-bgGreenR'>
                <div>
                    <img src={clock} alt="" className='w-20 h-20'/>
                </div>
                <div className='flex flex-col items-center justify-center md:items-start '>
                    <h3 className='text-lg font-semibold text-white'>Opening Hours</h3>
                    <p className='text-base text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 px-4 py-8 md:flex-row md:py-10 md:px-8 rounded-xl bg-textColorH'>
                <div>
                    <img src={marker} alt="" className='w-20 h-20'/>
                </div>
                <div className='flex flex-col items-center justify-center md:items-start '>
                    <h3 className='text-lg font-semibold text-white'>Opening Hours</h3>
                    <p className='text-base text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 px-4 py-8 md:flex-row md:py-10 md:px-8 rounded-xl bg-gradient-to-r from-bgGreenL to-bgGreenR'>
                <div>
                    <MdOutlinePhoneInTalk className='w-20 h-20 text-white'/>
                </div>
                <div className='flex flex-col items-center justify-center md:items-start '>
                    <h3 className='text-lg font-semibold text-white'>Opening Hours</h3>
                    <p className='text-base text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            
            
            
        </section>
    );
};

export default InfoCard;