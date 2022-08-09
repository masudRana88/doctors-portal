import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full px-16 pt-20 pb-10 bg-center bg-cover bg-footerBG'>
            <div className='flex flex-wrap justify-between gap-4'>
                <div className='mb-3 '>
                    <h5 className='mb-3 text-lg font-bold text-footerH'>SERVICES</h5>
                    <p className='mb-2 text-base font-normal text-footerT'>Emergency Checkup</p>
                    <p className='mb-2 text-base font-normal text-footerT'>Monthly Checkup</p>
                    <p className='mb-2 text-base font-normal text-footerT'>Weekly Checkup</p>
                    <p className='mb-2 text-base font-normal text-footerT'>Deep Checkup</p>
                </div>
                <div className='mb-3 '>
                    <h5 className='mb-3 text-lg font-bold text-footerH'>ORAL HEALTH</h5>
                    <p className='mb-2 text-base font-normal text-footerT'>Fluoride Treatment</p>
                    <p className='mb-2 text-base font-normal text-footerT'>Cavity Filling</p>
                    <p className='mb-2 text-base font-normal text-footerT'>Weekly Checkup</p>
                    <p className='mb-2 text-base font-normal text-footerT'>Teath Whitening</p>
                </div>
                <div className=''>
                    <h5 className='mb-3 text-lg font-bold text-footerH'>OUR ADDRESS</h5>
                    <p className='mb-2 text-base font-normal text-footerT'>New York - 101010 Hudson</p>
                </div>
            </div>
            <p className='mt-20 text-center'>Copyright 2022 All Rights Reserved</p>
        </footer>
    );
};

export default Footer;