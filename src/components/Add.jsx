import React from 'react'
import { useRef,useState,useEffect } from 'react'
export default function Add(props) {



    let div1change =()=>{
        if (props.div1.current.checked) {
            props.div1.current.checked = ''
        }
        else{props.div1.current.checked = 'checked'}
  
      }
    
    let div2change =()=>{
        if (props.div2.current.checked) {
            props.div2.current.checked = ''
        }
        else{props.div2.current.checked = 'checked'}


    }
    let div3change =()=>{
        if (props.div3.current.checked) {
            props.div3.current.checked = ''
        }
        else{props.div3.current.checked = 'checked'}
     
    }
 

return(
    <div  className='h-[80%] w-[100%] p-10 pl-32 pr-32'>
        <h1 className='text-[30px] text-[#02295a] font-bold'>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div  className='w-[100%]  pt-10 gap-5 flex flex-col justify-center items-center'>
            <div onClick={()=>{div1change()}} className='w-[80%] h-[100px] bg-slate-200 rounded-3xl flex items-center gap-5 p-10 cursor-pointer'>
            <input ref={props.div1} type="checkbox" Checked className="checkbox border-purple-700 checked:bg-purple-700 [--chkbg:theme(colors.purple.600)] [--chkfg:white] :" />
            <div>
                <h1 className='text-[20px] text-blue-950 font-bold'>Online service</h1>
                <p>Access to mutliplayer games</p>
            </div>
            <div>
                <p className='text-lg text-purple-700'>+ ${props.add1}/{props.cont==0 ? 'mo':'yr'}</p>
            </div>
            </div>
            <div onClick={()=>{div2change()}} className='w-[80%] h-[100px] bg-slate-200 rounded-3xl flex items-center gap-5 p-10 cursor-pointer'>
            <input ref={props.div2} type="checkbox" Checked className="checkbox border-purple-700 checked:bg-purple-700 [--chkbg:theme(colors.purple.600)] [--chkfg:white] :" />
            <div>
                <h1 className='text-[20px] text-blue-950 font-bold'>Larger storage</h1>
                <p>Extra 1TB of cloud save</p>
            </div>
            <div>
            <p className='text-lg text-purple-700'>+ ${props.add2}/{props.cont==0 ? 'mo':'yr'}</p>
            </div>
            </div>
            <div onClick={()=>{div3change()}} className='w-[80%] h-[100px] bg-slate-200 rounded-3xl flex items-center gap-5 p-10 cursor-pointer  '>
            <input ref={props.div3} type="checkbox" Checked className="checkbox border-purple-700 checked:bg-purple-700 [--chkbg:theme(colors.purple.600)] [--chkfg:white] :" />
            <div>
                <h1 className='text-[20px] text-blue-950 font-bold'>Customizable Profile</h1>
                <p>Custom theme on your profile</p>
            </div>
            <div> 
            <p className='text-lg text-purple-700'>+ ${props.add3}/{props.cont==0 ? 'mo':'yr'}</p>
            </div>
            </div>
            
           
        </div>
        
    </div>
  )
}
