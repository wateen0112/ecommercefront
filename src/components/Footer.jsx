import React,{useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
        AOS.init(
            {
                duration:400
            }
        );
        AOS.refresh();
      }, []);
    const iconStyle='bg-[#4333ff]  w-[30px] h-[30px] rounded-full  flex justify-center items-center text-white cursor-pointer hover:opacity-70 ';
  return (
   <div className='flex justify-around p-2 overflow-x-hidden sm:flex-col sm:text-center pb-5' >
    <div
    data-aos="fade-right"
    className='flex flex-1 justify-start flex-col flex-nowrap'><h3 className='text-[26px] font-bold mt-5'>ZIP CODE</h3>
    <p className='pr-10 mt-5 sm:px-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eligendi voluptate. Perferendis, illo cum eaque blanditiis,!</p>
    <div  className= 'w-[30%] flex justify-between items-center mt-[40px] mb-[20px] pl-3 sm:w-[100%] sm:px-10'>
        <div className={'bg-[#3434ff] '+iconStyle}>
            <i className='fa fa-facebook text-[20px]'></i>
        </div>
        <div className={'bg-[#60d1fd]  '+iconStyle}>
            <i className='fa fa-twitter text-[20px]'></i>
        </div>
        <div className={'bg-[#e0871c] '+iconStyle}>
            <i className='fa fa-instagram text-[20px]'></i>
        </div>
        <div className={'bg-[#ff3467] '+iconStyle}>
            <i className='fa fa-pinterest text-[20px]'></i>
        </div>
    </div>
    </div>
    <div
     className='flex flex-1 justify-start flex-col mt-[60px]'>
<div > <i className='fa fa-map-marker pr-5 mt-3'></i> Aleppo-Syria</div>
<div> <i className='fa fa-phone pr-5 mt-3'></i>+963-988096626</div>
<div> <i className='fa fa-envelope pr-5 mt-3'></i>wateenoaswad2000@gmail.com</div>

    </div>
   </div>
  )
}

export default Footer