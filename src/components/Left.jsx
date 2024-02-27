import React from 'react'

import './Left.css'

export default function Left(props) {
  return (
    <div id='leftSlide' className=' h-[100%] rounded-xl w-[30%] bg-[bgL] flex justify-start items-start p-5 flex-col gap-5'>
        <div className='flex justify-center items-center gap-4'>
            <p className={`text-white h-[50px] w-[50px] rounded-full border-solid border-white border-[2px] text-center flex justify-center items-center text-[20px] ${props.page == 0?'bg-blue-500':''}`}>1</p>
            <div>
            <p>step 1</p>
            <h1 className='text-white'> YOUR INFO</h1>
            </div>
           
        </div>
        <div className='flex justify-center items-center gap-4'>
            <p className={`text-white h-[50px] w-[50px] rounded-full border-solid border-white border-[2px] text-center flex justify-center items-center text-[20px] ${props.page==1?'bg-blue-500':''}`}>2</p>
            <div>
            <p>step 2</p>
            <h1 className='text-white'> SELECT PLAN</h1>
            </div>
           
        </div>
        <div className='flex justify-center items-center gap-4'>
            <p className={`text-white h-[50px] w-[50px] rounded-full border-solid border-white border-[2px] text-center flex justify-center items-center text-[20px] ${props.page==2?'bg-blue-500':''}`}>3</p>
            <div>
            <p>step 3</p>
            <h1 className='text-white'>ADD-ONS</h1>
            </div>
           
        </div>
        <div className='flex justify-center items-center gap-4'>
            <p className={`text-white h-[50px] w-[50px] rounded-full border-solid border-white border-[2px] text-center flex justify-center items-center text-[20px] ${props.page==3?'bg-blue-500':''}`}>4</p>
            <div>
            <p>step 4</p>
            <h1 className='text-white'> SUMMARY</h1>
            </div>
           
        </div>
    </div>
  )
}
