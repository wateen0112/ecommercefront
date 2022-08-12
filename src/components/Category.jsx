import React ,{useEffect}from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Category(props) {
    useEffect(() => {
        AOS.init(
       {   duration:500}
        );
        AOS.refresh();
    }, []);
    const categoryStyle ='flex flex-1 justify-center items-center overflow-hidden h-[450px]   min-w-[300px]  max-w-[400px] rounded-md   bg-[#333] shadow-xl  relative  m-6 cursor-pointer hover:bg-[#bbb] hover:shadow-[#777] transition-all transition-4 ' ;
  return (
    <div className={categoryStyle} data-aos={props.aos}>
        
        <img src={props.item.src} className="h-[100%] w-[100%] opacity-60 hover:opacity-100 transition-all"  alt="" />
        <div
        className='w-[100%] h-[100%] absolute top-0 left-0 flex items-center justify-center flex-col '>
            <h2 className='text-white  font-bold text-[40px]'>XYZ</h2>
            <button className='bg-[#8a4af3] p-[10px]  pt-[20px] pb-[20px]  rounded-md outline-none text-white font-semibold cat-btn'>See More</button>
        </div>
    </div>
  )
}

export default Category