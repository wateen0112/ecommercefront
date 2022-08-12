import React, {useState} from 'react'

function Qty() {
    const [counter  ,setCounter]= useState(1);
    const inc= function (){
if (counter<10) setCounter(counter+1);
    };
    const dec= function (){
        if(counter>0)setCounter(counter-1);

    }
    const btnStyle ="w-6 h-6 cursor-pointer bg-[#8a4af3] flex justify-center items-center  font-bold  text-white hover:bg-green-500" ;
  return (
    <div className='flex row '>
    <div  onClick={inc} className={btnStyle + ' rounded-tl-md rounded-bl-md'}>+</div>
    <div className={btnStyle +' text-black bg-white hover:bg-white border-t-2 border-b-2'}>{counter}</div>
    <div onClick={dec} className={btnStyle+' rounded-tr-md rounded-br-md'}>-</div></div>
  )
}

export default Qty