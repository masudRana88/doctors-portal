import React from 'react'
import { MdWarning ,MdClose} from "react-icons/md";
export default function viewUserPopUp({show,setShow,user}: props) {
    const phone = user.phone ? user.phone.toString() : "";
    if(!show){
        return null
    }
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center px-4 modal bg-modalBg' 
    onClick={()=>setShow(false)}>
        {/* Modal container */}
        <div className="bg-white w-[500px]  p-3 rounded-2xl" onClick={(e)=> e.stopPropagation()}>
            {/* Header */}
            <div className='flex items-center justify-between mb-5'>
                {/* Title */}
                <h4 className='inline-block text-xl font-semibold text-white'>{""}</h4>
                <div className='inline-block p-1 rounded-full cursor-pointer bg-slate-400' onClick={()=>setShow(false)}><MdClose className='text-2xl text-white'/></div>
            </div>
            {/* Body */}
                <div className=''>
                <form>
                    {/* Id */}
                    <h3 className='w-full px-3 py-2 m-0 mb-1 uppercase'>ID :</h3>
                    <input
                        type="text"
                        className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                        
                        value={user._id}
                        disabled
                        />
                    {/* Name */}
                    <h3 className='w-full px-3 py-2 m-0 mb-2 uppercase'>name :</h3>
                    <input
                        type="text"
                        className="block w-full px-3 py-1 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                        value={user.name}
                        disabled
                        />
                    {/* Email */}
                    <h3 className='w-full px-3 py-2 m-0 mb-1 uppercase'>email :</h3>
                    <input
                        type="text"
                        className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                        value={user.email}
                        disabled
                        />
                    {/* address */}
                    <h3 className='w-full px-3 py-2 m-0 mb-1 uppercase'>address :</h3>
                    <input
                        type="email"
                        className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                        placeholder="Enter Your Email"
                        value={user.address}
                        disabled
                        />
                    {/* phone */}
                    <h3 className='w-full px-3 py-2 m-0 mb-1 uppercase'>phone :</h3>
                    <input
                        type="number"
                        className="block w-full px-3 py-2 m-0 mb-4 text-base font-medium text-black transition ease-in-out bg-gray-100 border border-gray-300 border-solid form-control bg-clip-padding rounded-xl focus:outline-none"
                        value={phone}
                        disabled
                        />
                </form>
            </div>
       </div>
    </div>
  )
}

type userType ={
    _id: string
    name: string
    email : string
    address:string
    phone: number|null
    isAdmin: boolean

  }

type props ={
    show: boolean,
    setShow: (value: boolean) => void,
    user :  userType
}
