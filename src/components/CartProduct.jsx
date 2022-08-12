import React from 'react'
import Qty from './Qty'
function CartProduct({item}) {
    const colorStyle='ml-5 w-[25px] h-[25px] rounded-full cursor-pointer hover:borde-5 hover:border-solid hover:border-[2px] flex justify-center items-center'

  return (
   <div className='flex row justify-between '>
<div className='flex flex-1 overflow-hidden p-8  '>
    <img className='w-72 h-44 rounded-md  sm:h-24' src={item.src} alt="" />
</div>
<div className='flex flex-1 pt-8 flex-col text-[18px] '>
    <p><span className='font-bold'>ID : </span>  {item.id}</p>
    <p><span className='font-bold'>Name : </span>  {item.title}</p>
    <p><span className='font-bold'>Price : </span>  ${item.price}</p>
    <p className='flex flex-row items-center'><span className='font-bold'>Color : </span>   <div className={' bg-blue-500 '+colorStyle}><input type="radio" name="color" className="opacity-0 w-[100%] h-[100%]" /></div>
   </p>
</div>
<div className='flex flex-1 flex-row justify-end items-center'>

 <p className='mr-5 sm:m-0'>Quantity: </p> <div  className='sm:pr-3'><Qty/></div>
</div>
   </div>
  )
}

export default CartProduct