import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from "./../../../images/icons/clock.svg"
import phone from "./../../../images/icons/phone.svg"
import marker from "./../../../images/icons/marker.svg"
const InfoContainer = () => {
    return (
        <section className='flex flex-wrap items-center justify-center w-full h-full gap-4 px-3 mt-10 mb-10'>
            <InfoCard image={clock} title="Opening Hours" info='Lorem Ipsum is simply dummy text of the pri' colorGreen={true}/>
            <InfoCard image={marker} title="Visit our location" info='Brooklyn, NY 10036, United States' colorGreen={false}/>
            <InfoCard image={phone} title="Contact us now" info='+000 123 456789' colorGreen={true}/>
        </section>
    );
};

export default InfoContainer;