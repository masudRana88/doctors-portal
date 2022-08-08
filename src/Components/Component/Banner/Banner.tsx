import React from 'react';
import Button from '../Button';
import chair from "./../../../images/images/chair.png"
const Banner = () => {
    return (
        <section className=' w-full px-4 h-full md:h-[94vh] bg-bannerBG mt-[66px]'>
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
                <div className='w-full pb-10 mt-10 md:w-2/4 md:mt-0'>
                    <h2 className='mb-3 text-4xl font-bold text-textColorH'>Your New Smile Starts Here</h2>
                    <p className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </section>
    );
};

export default Banner;