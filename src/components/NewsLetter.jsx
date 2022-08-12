import React,{useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
function NewsLetter() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='bg-[#8a3af3]  h-[400px]  overflow-hidden flex justify-center items-center' >
<div data-aos="zoom-in-up">
<h1 data-aos="fade-up" className='text-[45px] font-bold text-center pt-10 flex items-center justify-center text-center '>NEWSLETTER</h1>
<p className='text-center'>Keep in touch with Us By Sending Us Emails</p>
<div   className='w-[100%] flex justify-center items-center mt-8 '>
    <div  data-aos="zoom-in-up"   className='w-[350px] flex justify-between   bg-white rounded-md overflow-hidden'><input type="text"
    placeholder=' @ Enter Your Email'
className='p-1 outline-none '
/>

<button className='w-[40px] h-[40px] flex justify-center items-center bg-[#3eff43] hover:bg-green-600 hover:text-white' ><i className='fa fa-send'></i></button></div>
</div>
</div>

    </div>
  )
}

export default NewsLetter