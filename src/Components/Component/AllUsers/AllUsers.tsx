import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllUsers, updateUsersType } from '../../../Redux/Slice/userSlice/allUsersSlice'
import { AppDispatch, RootState } from '../../../Redux/store'
import { MdDeleteForever } from "react-icons/md";
import ViewUserPopUp from "./viewUserPopUp"
import Aleart from '../Aleart'
import { FaEye } from "react-icons/fa";
import Loder from '../Loder'
export default function AllUsers() {
  const [show, setShow] =useState(false)
  const [view, setView] =useState(false)
  const [itemId, setItemId] = useState("")
  const [user,setUser]= useState<userType>({
    _id: "",
    name: "",
    email: "",
    address:"",
    phone: null,
    isAdmin: false,
  })
  type userType ={
    _id: string
    name: string
    email : string
    address:string
    phone: number|null
    isAdmin: boolean
  }
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state:RootState)=> state.allUsers.users)
  const isLiding = useSelector((state:RootState)=> state.allUsers.isLoding)
  const handleDelete = (id:string)=>{
    setItemId(id)
    setShow(true)
  }
  const handleView = (usr:userType)=>{
    setUser(usr)
    setView(true)
  }
  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>,id:string)=>{
    const type = e.target.value
    const data = {type, id}
    dispatch(updateUsersType(data))
  }
  useEffect(() => {
    dispatch(getAllUsers())
  },[])
  return (
    <div className='w-full h-full p-5 mx-auto'>
      <div className='w-full p-5 rounded-md shadow bg-slate-100'>
            <h4 className='mt-8 mb-10 text-2xl font-normal text-center'>All Users :</h4>
            {isLiding && <Loder size={35}/>}
            {!isLiding && users.length === 0 && <div className="px-6 py-5 mb-3 text-base text-blue-700 bg-blue-100 rounded-lg" role="alert">Emty</div>}
            {/* table start */}
            {!isLiding && users.length !== 0 && <div className="flex flex-col">
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
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item:userType, index:number) =><tr key={index+1}  className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                        {index+1}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        <select onChange={(e)=>handleChangeType(e, item._id)} className={`px-2 py-1 text-base text-gray-500 rounded-md ${item.isAdmin ? "bg-green-200": "bg-orange-200"}`}>
                                            {
                                                item.isAdmin && <>
                                                <option className="bg-green-200" value="true">Admin</option>
                                                <option className="bg-orange-200" value="false">User</option></>
                                            }
                                            {
                                                !item.isAdmin && <>
                                                <option className="bg-orange-200" value="false">User</option>
                                                <option className="bg-green-200" value="true">Admin</option></>
                                            }
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                        <button type="button" className="inline-block px-1 py-1 ml-2 text-xl leading-tight text-white transition duration-150 ease-in-out bg-blue-600 rounded-sm shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0" onClick={()=>handleView(item)}>
                                            <FaEye/>
                                        </button>
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
                {show && <Aleart aleart={show} setAleart={setShow} deletId={itemId} setDeletId={setItemId} worning={true} title="Warning" body='You wantes to delete this user' isAppoinment={false} isUserAppointmnet={false}  isUser={true}/>}
            </div>}
            {/* table ends */}
            <ViewUserPopUp show={view} setShow={setView} user={user}/>
      </div>
    </div>
  )
}
