import React from 'react';

const Modal = ({show,setShow,time}: props) => {
    if(!show){
        return null
    }
    const habdleSubmit =(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setShow(false)
        console.log("submit");
    }
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center modal bg-modalBg' 
        onClick={()=>setShow(false)}>
            {/* Modal container */}
           <div className='bg-white w-[500px]  p-3 rounded-2xl' onClick={(e)=> e.stopPropagation()}>
                {/* Header */}
                <div className='mb-5 '>
                    {/* Title */}
                    <h4 className='text-xl font-semibold text-black'>This is title</h4>
                </div>
                {/* Body */}
                <div className=''>
                    <form onSubmit={habdleSubmit}>
                        {/* Date */}
                        <input
                            type="text"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Date"
                            value=""
                            disabled
                            required
                            />
                        {/* Time */}
                        <input
                            type="text"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Time"
                            required
                            value={time}
                            disabled
                            />
                        {/* Name */}
                        <input
                            type="text"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Full name"
                            required
                            />
                        {/* phone */}
                        <input
                            type="number"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Your Phone number"
                            required
                            />
                        {/* email */}
                        <input
                            type="email"
                            className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                            placeholder="Enter Your Email"
                            required
                            />
                        
                        <input type='submit' value="submit" className='w-full py-2 text-white cursor-pointer rounded-xl bg-bgGray'/>
                    </form>
                </div>
               
               
           </div>
        </div>
    );
};


type props ={
    show: boolean,
    time: string,
    setShow: (value: boolean) => void,
  
}

export default Modal;