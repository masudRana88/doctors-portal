import React from 'react';
import people1 from "./../../../images/images/people1.png"
const Testimonial = () => {
    return (
        <section className='w-full px-4 mt-10 mb-16 bg-right-top bg-no-repeat bg-small md:mt-32 md:px-14 bg-testimonialBG'>
            <div>
                <h3 className="mb-3 text-xl font-bold text-bgGreenL">Testimonial</h3>
                <h4 className="mb-3 text-2xl font-semibold text-textColorH md:text-4xl">What Our Patients Says</h4>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-8 my-20 md:mt-36 md:mb-36 '>
                {/* cart 1 */}
                <div className='px-6 py-6 w-96 rounded-xl shadow-cardShadow'>
                    <p className='mb-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex gap-3'>
                        <img
                            src={people1}
                            className="w-16 rounded-full h-14"
                            alt="Avatar"
                            />
                        <div className='flex flex-col items-start justify-center'>
                            <h4 className='text-xl font-normal'>Winson Herry</h4>
                            <h5 className='text-base'>California</h5>
                        </div>
                    </div>
                </div>
                {/* cart 1 */}
                <div className='px-6 py-6 w-96 rounded-xl shadow-cardShadow'>
                    <p className='mb-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex gap-3'>
                        <img
                            src={people1}
                            className="w-16 rounded-full h-14"
                            alt="Avatar"
                            />
                        <div className='flex flex-col items-start justify-center'>
                            <h4 className='text-xl font-normal'>Winson Herry</h4>
                            <h5 className='text-base'>California</h5>
                        </div>
                    </div>
                </div>
                {/* cart 1 */}
                <div className='px-6 py-6 w-96 rounded-xl shadow-cardShadow'>
                    <p className='mb-4'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex gap-3'>
                        <img
                            src={people1}
                            className="w-16 rounded-full h-14"
                            alt="Avatar"
                            />
                        <div className='flex flex-col items-start justify-center'>
                            <h4 className='text-xl font-normal'>Winson Herry</h4>
                            <h5 className='text-base'>California</h5>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
};

export default Testimonial;