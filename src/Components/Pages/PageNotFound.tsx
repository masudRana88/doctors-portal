import React from 'react'
import dribbble from "./../../images/images/dribbble_1.gif"
export default function PageNotFound() {
  return (
    <div className='mt-[66px]'>
        <div className='flex flex-col items-center justify-center w-full px-4 -mt-4 bg-slate-400 h-96'>
            <h2 className='text-2xl font-bold text-white md:text-4xl'>404</h2>
            <p className='mt-3 text-lg text-center text-white'>Page is not found<br/>Chack You URL and try again</p>
        </div>
        <div className='flex items-center justify-center w-full'>
            <img src={dribbble} alt=""/>
        </div>
    </div>
  )
}
