import React from 'react'

function ProductLoading() {
    const productsStyle ='flex flex-1 justify-center items-center overflow-hidden h-[350px]   min-w-[280px]  max-w-[280px] rounded-lg  bg-white shadow-xl  relative  m-2 p-5 cursor-pointer' ;

  return (
    < div className={productsStyle } >
         <div className='flex flex-row justify-between items-center w-[100%] '>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-300  '></div>
            <div className='w-[50px] h-[50px] rounded-full  bg-gray-300 '></div>
            <div className='w-[50px] h-[50px] rounded-full  bg-gray-300'></div>
            </div>   
     
       
              </div>
  )
}

export default ProductLoading