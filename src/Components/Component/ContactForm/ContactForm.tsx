import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    subject: string,
    msg: string,
  };

const ContactForm = () => {
    const { register, handleSubmit,  formState: { errors }, reset } = useForm<Inputs>();

    const formSubmit: SubmitHandler<Inputs>= (data) =>{
        console.log(data)
        reset()
    }
    return (
        <section id='contactus' className='flex items-center justify-center w-full h-full bg-appointmentBG'>
            <div className='md:w-[550px] w-[440px] my-16 px-4 md:my-32'>
                <h3 className="mb-2 text-lg font-bold text-center md:text-xl text-bgGreenL">Contact Us</h3>
                <h4 className="mb-8 text-xl font-semibold text-center text-white md:2xl ">Stay connected with us</h4>
                {/* Form */}
                <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col">
                
                {errors.email && <span className='mb-2 ml-2 text-red-500'>Email field is required</span>}
                <input className="w-full text-base font-normal rounded px-3 py-1.5 mb-4" placeholder='Email Address'  {...register("email", { required: true })} />


                {errors.subject && <span className='mb-2 ml-2 text-red-500'>Subject field is required</span>}
                <input className="w-full text-base font-normal rounded px-3 py-1.5 mb-4" placeholder='Subject' {...register("subject", { required: true })} />
               

                {errors.msg && <span className='mb-2 ml-2 text-red-500'>Massage field is required</span>}
                <textarea rows={5} className="w-full text-base font-normal rounded px-3 py-1.5 mb-4" placeholder='Your message' {...register("msg", { required: true })} />
               
                
                <div className='flex items-center justify-center w-full'>
                    <input type="submit" className='px-4 py-2.5 rounded-md font-semibold text-white bg-gradient-to-bl from-bgGreenR to-bgGreenL' />
                </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;