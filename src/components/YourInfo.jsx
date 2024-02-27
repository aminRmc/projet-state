import React from 'react'
import { useRef,useState } from 'react'
export default function YourInfo(props) {
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [tel, settel] = useState('')

    let nameChange = (e)=>{
        setname(e.target.value)}
    let mailChange = (e)=>{
        setmail(e.target.value)}
    let telChange = (e)=>{
        settel(e.target.value)}
return(
<div className='h-[80%] w-[100%] flex flex-col justify-start items-center p-10 pl-24'> 
        <div className='flex justify-start flex-col items-start w-[100%] pb-[30px]'>
            <h1 className={`text-[50px] text-blue-950 font-bold `}>Personal info</h1>
            <p>Please provide your name, email adress,and phone number .</p>
        </div>
        <div className='w-[100%] pb-10'>
            <p className='text-blue-950 text-[20px] font-bold'>Your name is : {name}</p>
            <input className='bg-white outline-none border-solid border-[1px] border-black rounded-lg w-[80%] h-[50px] focus:border-purple-800 focus:border-solid focus:border-[2px]'   onChange={(event)=> nameChange(event)} type="text" />
        </div>
        <div className='w-[100%] pb-10'>
            <p className='text-blue-950 text-[20px] font-bold'>Your e-mail is : {mail}</p>
            <input className='bg-white outline-none border-solid border-[1px] border-black rounded-lg w-[80%] h-[50px] focus:border-purple-800 focus:border-solid focus:border-[2px]'  onChange={(event)=> mailChange(event)} type="email" />
        </div>
        <div className='w-[100%] pb-10'>
            <p className='text-blue-950 text-[20px] font-bold'>Your phone number is : {tel}</p>
            <input className='bg-white outline-none border-solid border-[1px] border-black rounded-lg w-[80%] h-[50px] focus:border-purple-800 focus:border-solid focus:border-[2px]'  onChange={(event)=> telChange(event)} type="tel" />
        </div>
</div>
)}