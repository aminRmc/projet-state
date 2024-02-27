import React from 'react'
import { useState,useEffect } from 'react';

export default function Summary(props) {
 
    const [total, settotal] = useState([])
    console.log(total);


  return (
    <div className='h-[80%] w-[100%] p-10 flex flex-col justify-start items-center'>
        <div className='flex flex-col justify-start  w-[100%]'>
            <h1  className='text-[30px] text-[#02295a] font-bold'>Finishing up</h1>
            <p>Double check everything looks OK before confirming.</p>
        </div>
        <div className='flex  items-start p-20 w-[80%] pb-5 justify-between'>        
            <h1 className='text-[20px] text-[#02295a] font-bold'>{props.sum[0]}{props.cont == 0 ?'(Monthy)':'(Yearly)'}</h1>
            <p className='text-[20px] text-[#02295a] font-bold'>{props.sum[1]} $</p>
            {/* <p className='cursor-pointer' onClick={props.changed()}>changed</p> */}
        </div>
        <div className='flex justify-start items-start w-[58%] underline'>
            <p className='cursor-pointer'>Changed</p>
        </div>
        <hr className='w-[60%] border-[1px] mb-5 mt-8 ' />
        {props.sum1.map((element, key) => {
      
        return (                  
        <div key={key} className='flex  items-start  w-[58%] justify-between'>
        <h1 className=''>{element.nom}</h1>
        <p className='text-[20px] text-[#02295a] font-bold'>{element.prix} $</p>
        </div>
)})}
            
    </div>
  )
}
