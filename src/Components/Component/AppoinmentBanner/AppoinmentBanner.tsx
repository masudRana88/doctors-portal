import React, { useState } from 'react';
import 'react-day-picker/dist/style.css'
import chair from "../../../images/images/chair.png"
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const AppoinmentBanner = () => {
    const [date, setDate] = React.useState<Date>();
    console.log(date);
    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <section className='w-full px-4 h-full md:h-[94vh] bg-bannerBG'>
            <div className='items-center justify-center h-full gap-9 md:flex md:container md:mx-auto md:flex-row-reverse'>
                
                {/* row 1 */}
                <div className='flex flex-wrap justify-center w-full md:w-2/4'>
                    <img
                        src={chair}
                        className="h-auto mt-10 shadow-2xl md:w-full md:mt-0"
                        alt=""
                    />
                </div>
                
                {/* row 2 */}
                <div className='flex justify-center w-full pb-10 mt-10 justify-ce md:w-2/4 md:mt-0'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    footer={footer}
                />
                </div>
            </div>
        </section>
    );
};

export default AppoinmentBanner;