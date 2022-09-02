import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loder ({size}: props) {
  return (
    <div className='flex items-center justify-center w-full mb-3'>
        <ClipLoader size={35} />
    </div>
  )
}
type props ={
    size: number
}