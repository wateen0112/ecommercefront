import { hover } from '@testing-library/user-event/dist/hover';
import {React , useEffect , useState} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import {Link, useParams} from 'react-router-dom';
function Product(props) {
  useEffect(() => {
    AOS.init({
      duration:600 
    });
    AOS.refresh();

  }, []);
  const {id , image , rating, title ,price , category , description}= props.item;
  const param  = useParams();
  const [hoverEvent , setHoverEvent]= useState(false);
  
  const iconStyle = 'bg-slate-100 w-[40px] h-[40px] rounded-full flex justify-center items-center overflow-hidden hover:text-white hover:bg-[#8a4af3] '
    const productsStyle ='flex flex-1 justify-center items-center overflow-hidden h-[350px]   min-w-[280px]  max-w-[280px] rounded-lg  bg-white shadow-xl  relative  m-2 p-5 cursor-pointer' ;
    const actionsStyle=' w-[100%] h-[100%] absolute top-0 left-0 flex items-center justify-center flex-row pl-[30px] pr-[30px]';
  const imgstyle="w-[90%] h-[90%] ";
    return (
   <Link  data-aos='zoom-in' to={"/product/"+id}>
      <div  className={productsStyle} onMouseEnter={()=>{
setHoverEvent(true);

      }}
      onMouseLeave={()=>{
setHoverEvent(false);

      }}
      >

          {
            console.log('id:', param.id)
          }
          <img src={image} className={ hoverEvent?' opacity-60 '+ imgstyle:imgstyle}  alt="" />
          <div
          className={hoverEvent?actionsStyle : 'hidden '+actionsStyle }>
<div className='m-5'>
<i className={'fa fa-heart-o '+ iconStyle}></i>
</div>
<div className='m-5'>
<i className={'fa fa-shopping-cart '+ iconStyle}></i>
</div>
<div className='m-5'>
<i className={'fa fa-search '+ iconStyle}></i>
</div>
                </div>
      </div>
   </Link>
    )
}

export default Product