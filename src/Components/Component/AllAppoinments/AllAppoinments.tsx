import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllAppointments, updateAppointMentStatus } from '../../../Redux/Slice/AppoinmentSlice/allAppointmentSlice'
import { AppDispatch, RootState } from '../../../Redux/store'
import { MdDeleteForever } from "react-icons/md";
import Aleart from '../Aleart'
import Loder from '../Loder'

export default function AllAppoinments() {
    type itemType = {
        _id: string,
        name: string,
        email: string,
        phone: number|null,
        date: string,
        time: string
        status: string,
        serviceName: string
        userId: string,
        __v: number
    }
    const [itemId, setItemId] = useState("")
    const [show , setShow] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    // const adminId = useSelector((state:RootState)=> state.user.id)
    const appointments = useSelector((state:RootState)=> state.allAppointments.appointments)
    const isLoding = useSelector((state:RootState)=> state.allAppointments.isLoding)
    const handleDelete =(id:string)=>{
        setItemId(id)
        setShow(true)
    }
    const handleOnChanhe = (e: React.ChangeEvent<HTMLSelectElement>,id:string)=>{
        const status = e.target.value
        const data = {id, status}
        dispatch(updateAppointMentStatus(data))
    }
    useEffect(() => {
        dispatch(getAllAppointments())
    },[])
  return (
    <div className='w-full h-full p-5 mx-auto'>
        <div className='w-full p-5 rounded-md shadow bg-slate-100'>
            <h4 className='mt-8 mb-10 text-2xl font-normal text-center'>All appoinments :</h4>
            {isLoding && <Loder size={35}/>}
            {!isLoding && appointments.length === 0 && <div className="px-6 py-5 mb-3 text-base text-blue-700 bg-blue-100 rounded-lg" role="alert">Emty</div>}
            {/* table start */}
            {!isLoding && appointments.length !== 0 &&<div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                        <thead className="bg-white border-b">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    service Name
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    User name
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((item:itemType, index:number) =><tr key={index+1}  className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                        {index+1}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {item.serviceName}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {item.date}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {item.time}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        <select onChange={(e)=>handleOnChanhe(e, item._id)} className={`px-2 py-1 text-base text-gray-500 rounded-md ${item.status === "panding" ? "bg-yellow-200": item.status === "approved"? "bg-green-200":"bg-red-200"}`}>
                                            <option value={item.status}>{item.status}</option>
                                            {
                                                item.status === 'panding' && (<>
                                                    <option value="approved" className='bg-green-200'>approved</option>
                                                    <option value="rejected" className='bg-red-200'>rejected</option>
                                                    </>
                                                )
                                            }
                                            {
                                                item.status === 'approved' && (<>
                                                    <option value="panding" className='bg-yellow-200'>panding</option>
                                                    <option value="rejected" className='bg-red-200'>rejected</option>
                                                    </>
                                                )
                                            }
                                            {
                                                item.status === 'rejected' && (<>
                                                    <option value="panding" className='bg-yellow-200'>panding</option>
                                                    <option value="approved" className='bg-green-200'>approved</option>
                                                    </>
                                                )
                                            }
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        
                                        <button type="button" className="inline-block px-1 py-1 ml-2 text-xl leading-tight text-white transition duration-150 ease-in-out bg-red-600 rounded-sm shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0" onClick={()=>handleDelete(item._id)}>
                                            <MdDeleteForever/>
                                        </button>
                                    </td>
                            </tr>)
                            }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>}
            {/* table ends */}
            {show && <Aleart aleart={show} setAleart={setShow} deletId={itemId} setDeletId={setItemId} worning={true} title="Warning" body='You wantes to delete this Appoitment' isAppoinment={true} isUserAppointmnet={false}  isUser={false}/>}
        </div>
    </div>
  )
}