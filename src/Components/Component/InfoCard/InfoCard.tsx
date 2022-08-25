import React from 'react';

const InfoCard = ({image,title, info ,colorGreen }:props) => {
    return (

            <div className={`flex flex-col items-center justify-center gap-3 px-4 py-8 md:flex-row md:py-10 md:px-8 rounded-xl  ${colorGreen? "bg-gradient-to-r from-bgGreenL to-bgGreenR": "bg-[#3A4256]"}`}>
                <div>
                    <img src={image} alt="" className='w-20 h-20'/>
                </div>
                <div className='flex flex-col items-center justify-center md:items-start '>
                    <h3 className='text-lg font-semibold text-white'>{title}</h3>
                    <p className='text-base text-white'>{info}</p>
                </div>
            </div>

    );
};
type props ={
    image: string,
    title: string,
    info: string,
    colorGreen : boolean
}

export default InfoCard;