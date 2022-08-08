import React from 'react';
import Button from '../Button';
import treatment from "./../../../images/images/treatment.png"
const DentalCare = () => {
    return (
        <section className='container flex flex-col h-full px-4 pt-10 mx-auto mb-10 md:mb-16 md:pt-16 md:flex-row'>
            <div className='flex items-center justify-center w-full md:w-2/4'>
                <img src={treatment} alt="" className='w-[322px] h-[4-8px] md:w-[458px] md:h-[576px] rounded-md hover:shadow-2xl transition ease-out delay-150'/>
            </div>
            <div className='flex flex-col items-start justify-center w-full mt-10 md:w-2/4 md:mt-0'>
                    <h2 className='mb-3 text-4xl font-bold text-textColorH'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>GET STARTED</Button>
            </div>
        </section>
    );
};

export default DentalCare;