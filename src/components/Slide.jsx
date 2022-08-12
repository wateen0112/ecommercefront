import {React, useState,useEffect} from 'react'
import slidesdata  from '../data/slides'; 
function Slide() {

    const [index , setIndex ]= useState(0);

    const [isRight , setDirection]=useState(false)
    const [slidesArr , setSlideArr] = useState(slidesdata);
    const slideStyle= "wrapper flex  w-[100%]  h-[500px] justify-start items-center shadow-2xl relative rounded-lg border-10px overflow-hidden border-gray-300 "

  
    const sliderImageStyle='forImage flex flex-1 h-[100%] w-[100%] justify-center items-center ';
    useEffect(() => {
      const autoPlay = setInterval(() => {
    nextSlide();
      }, 3500);
      return () => {
    clearInterval(autoPlay)  };
    }, [index]);
    const nextSlide = ()=>{ 

  setDirection(true);
    if (index>slidesArr.length-2)
   

    setIndex(0);
   
    else 

    setIndex(index+1);


  }
const prevSlide = ()=>{
    setDirection(false);
    if (index==0)
    setIndex(5);
    else setIndex(index-1);
}

 

  
    const arrowStyle =' p-[8px]   ml-[8px] mr-[8px] font-bold text-[50px] flex justify-center items-center cursor-pointer  rounded-full ';
  return (
    <div className='flex justify-between items-center h-[540px] sm:flex-col
    sm:px-2
    sm:mt-3
    sm:h-auto
    sm:max-w-[100%]'>
{/* left Arrow */}
<div   className='sm:hidden' onClick= {prevSlide}>
    <i className={'   fa fa-angle-left '+arrowStyle}></i>
</div>

{/* Central Div */}
{   slidesdata.map((item , i)=>

        <div className={i!=index? slideStyle +'hidden':slideStyle } key={i}>

<div className='h-[100%] flex items-center justify-center slide tablet:justify-start tablet:mr-[30%] tablet:w-[60%] w-[60%]
sm:w-[100%]
md:w-[100%]
'>
    <div className={  !isRight?sliderImageStyle+ ' left-animation':sliderImageStyle+' right-animation' }>
        <img 
        alt="Slider Image"
        className="h-[100%] object-cover w-[100%] tablet:w-[100%] "
        src={item.img} />
    </div>
    </div>

    <div className=' right des flex flex-col pl-[30px] w-[75%] absolute ml-[32%] filter-invert overflow-hidden
    
    md:w-[100%] first-letter:
   md:m-0
 sm:mt-0
 sm:bottom-0
 md:mt-0
 sm:bottom-0
   md:bg-white
   md:h-[45%]
   md:p-3
   md:text-center
sm:h-[60%]
sm:w-[100%] first-letter:
sm:m-0

sm:bg-white
sm:h-[50%]
  
      sm:mt-0
      

    '>
        <h2 className='text-animation text-[45px] md:text-lg sm:text-lg font-bold flex flex-row  flex-wrap overflow-hidden
        md:text-center md:w-[100%]
        md:flex md:justify-center
        sm:text-center sm:w-[100%]
        sm:flex sm:justify-center
       sm:h-auto
       sm:mt-16
        
        '>
          
          <span className='text-white md:text-black  sm:text-black md:text-center'>{item.span+'  '}</span> {item.content} </h2>
        <p className='sm:m-0 sm:p-0 text-animation text-[35px] md:text-black  sm:text-black text-white font-bold sm:text-center'>{item.content2}</p>
<div 
className='md:w-[100%]
flex justify-start ml-5
md:justify-center md:ml-0
sm:justify-center sm:ml-0
sm:mb-3'
>
<button className={item.mainColor+ ' shadow-or w-[150px] p-[8px] mt-[20px] rounded-sm shadow-md text-white font-bold hover:mr-[40px] pr-[20px] transition-all'}>SHOP NOW</button>
  
</div>
     </div>


</div>
    )}
{/* right Arrow */}
<div className='sm:hidden' onClick={nextSlide}>
    <i className={' fa fa-angle-right '+arrowStyle}></i>
</div>
{/*   Mobile Arrows*/}
<div className='tablet:hidden md:hidden flex justify-around w-[100%] mt-5'>
<div className='' onClick={nextSlide}>
    <i className={' fa fa-angle-left text-md'+arrowStyle}></i>
</div>
<div className='' onClick={prevSlide}>
    <i className={' fa fa-angle-right text-md '+arrowStyle}></i>
</div>

</div>
    </div>
    
  )
}

export default Slide