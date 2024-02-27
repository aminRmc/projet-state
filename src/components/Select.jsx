import React, { useRef } from 'react'
import { useState } from 'react'
import arcade from './../assets/image/icon-arcade.svg'
import advenced from './../assets/image/icon-advanced.svg'
import pro from './../assets/image/icon-pro.svg'

export default function Select(props) {
    let btncont = useRef()
    let prix = ()=>{
        if (props.cont==0) {
            props.setarcadePrix(90)
            props.setadvencedPrix(120)
            props.setproPrix(150)}
        else{props.setarcadePrix(9)
            props.setadvencedPrix(12)
            props.setproPrix(15)}}
    let contchange =()=>{
        if (props.cont == 0) {
            props.setcont(1)}
        else{
            props.setcont(0)}}
    let addchange=()=>{
                if (props.cont == 0) {
                  props.setadd1(10)
                  props.setadd2(20)
                  props.setadd3(20)
                }else{ 
                    props.setadd1(1)
                    props.setadd2(2)
                    props.setadd3(2)}
    }
  return (
    <div className='h-[80%] w-[100%] p-10 pl-32 pr-32'>
        <h1 className='text-[30px] text-[#02295a] font-bold'>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className='w-[100%] pt-10 gap-5 flex'>
        <div onClick={()=>{props.setselect(1)}} className={`h-[180px] border-solid border-[2px] w-[40%] rounded-xl p-10 hover:border-purple-500 ${props.select== 1 ?'bg-slate-100':''}`}>
            <img src={arcade} className='mb-5 size-[50px] ' alt="" />
            <h1 className=' text-[#02295a] font-bold text-xl'>Arcade</h1>
            <p>${props.arcadePrix}/{props.cont==0 ? 'mo':'yr'}</p>
        </div>
        <div onClick={()=>{props.setselect(2)}} className={`h-[180px] border-solid border-[2px] w-[40%] rounded-xl p-10 hover:border-purple-500 ${props.select== 2 ?'bg-slate-100':''}`}>
            <img src={advenced} className='mb-5 size-[50px] ' alt="" />
            <h1 className=' text-[#02295a] font-bold text-xl'>Advenced</h1>
            <p>${props.advencedPrix}/{props.cont==0 ? 'mo':'yr'}</p>
        </div>
        <div onClick={()=>{props.setselect(3)}} className={`h-[180px] border-solid border-[2px] w-[40%] rounded-xl p-10 hover:border-purple-500 ${props.select== 3 ?'bg-slate-100':''}`}>
            <img src={pro} className='mb-5 size-[50px] ' alt="" />
            <h1 className=' text-[#02295a] font-bold text-xl'>Pro</h1>
            <p>${props.proPrix}/{props.cont==0 ? 'mo':'yr'}</p>
        </div>
       
        </div>
        <div className='h-[50px] mt-[25px] bg-[#bfe2fd] rounded-sm flex justify-center items-center gap-16'>
        <p className={`${props.cont==0?'text-blue-950':''}`}>Monthly</p>
        {
            props.cont == 1 ? 
            <input ref={btncont} type="checkbox" checked  onClick={()=>{contchange();prix();addchange()}}  className="toggle [--tglbg:darkblue] bg-white hover:bg-slace border-blue-500"  />:
            <input ref={btncont} type="checkbox"  onClick={()=>{contchange();prix();addchange()}}  className="toggle [--tglbg:darkblue] bg-white hover:bg-slace border-blue-500"  />
        }
        
        <p className={`${props.cont==1?'text-blue-950':''}`}>Yearly</p>
        </div>
    </div>
  )}