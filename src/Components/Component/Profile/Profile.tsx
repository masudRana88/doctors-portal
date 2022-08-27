import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUser } from '../../../Redux/Slice/userSlice/userSlice';
import { AppDispatch, RootState } from '../../../Redux/store';
export default function Profile() {

  let user:any = useSelector<RootState>(state =>state.user);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const [id,setId] = useState("")
 
  const dispach = useDispatch<AppDispatch>()

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user.phone);
    setId(user.id);
  },[user, user.email])

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispach(updateUser({email,name,phone,address,id}))
    console.log(email,name,phone,address,id);
  }
  return (
    <div className='w-full h-full mx-auto'>
        <div className='w-5/6 p-5 mt-5 ml-5 rounded-md shadow bg-slate-100'>
          <h4 className='mt-8 mb-10 text-2xl font-normal text-center'>My Profile</h4>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
            {/* Email */}
            <div className="mb-3 xl:w-96">
              <label htmlFor="email" className="inline-block mb-2 text-gray-700 form-label">Email</label>
              <input id='email' disabled defaultValue={email} onBlur={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
            </div>
            {/* Name */}
            <div className="mb-3 xl:w-96">
              <label htmlFor="name" className="inline-block mb-2 text-gray-700 form-label">Name</label>
              <input id='name' defaultValue={name} onBlur={(e)=>setName(e.target.value)} type="text" placeholder="Enter Your Name" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
            </div>
            {/* Phone number */}
            <div className="mb-3 xl:w-96">
              <label htmlFor="phone" className="inline-block mb-2 text-gray-700 form-label">Phone</label>
              <input id="phone" defaultValue={phone} onBlur={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter Your Phone Number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
            </div>
            {/* Address */}
            <div className="mb-3 xl:w-96">
              <label htmlFor="address" className="inline-block mb-2 text-gray-700 form-label">Address</label>
              <textarea id="address" defaultValue={address} onBlur={(e)=>setAddress(e.target.value)}  placeholder="Enter Your Address"  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
            </div>
            
            <input type="submit" value="Update" className="mb-8 inline w-96 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"/>
        </form>
        </div>
    </div>
  )
}
