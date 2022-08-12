

import React  , {useEffect}from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";

import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Qty from "../components/Qty";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { removeSelectedProduct, selectProduct } from "../redux/actions/productsActions";
import { useParams } from "react-router-dom";

function ProductPage (){
   const params = useParams();
   const pId = params.id;
   const dispatch = useDispatch();
   
    const colorStyle='ml-5 w-[25px] h-[25px] rounded-full cursor-pointer hover:borde-5 hover:border-solid hover:border-[2px] flex justify-center items-center'
   const product =  useSelector((state)=>state.product);
   
   const getSingleProduct = async ()=>{
    removeSelectedProduct()
    const response = await axios.get ('https://fakestoreapi.com/products/'+pId).catch(err=>console.log(err));
dispatch(selectProduct(response.data));

   }
   
   useEffect(() => {
    getSingleProduct()
 
   },);
   
   const {id , image , rating, title ,price , category , description}= product;
   return(<div>
<Announce/>
<Navbar/>

{
    pId=='' ||id == '' ?<div>
loading
    </div>:

<div className="flex justify-between items- h-auto   overflow-hidden
sm:h-auto
sm:justify-center sm:flex-col" >
       <h2 className="font-semibold text-[2.5rem] mb-1 mt-5  text-center tablet:hidden md:hidden">{title}</h2>
<div className="flex flex-1 w-[40%] h-[100%] p-11   sm:w-[100%]">
    <img 
    className="object-fit mt-10  rounded-md shadow-md sm:w-[100%] sm:h-[100%] sm:mt-0"
    src={image} alt="" />
</div>
<div className=" tablet:hidden md:hidden px-11 sm:mb-5 flex flex-row justify-between">
<p className="text-[28px] mt-1">Price: <span className="font-bold">{price}$</span></p>
<button className="bg-[#8a4af3] w-[100px] mt-5 p-1 sm:m-0 text-white font-bold rounded-md shadow-lg pt-2 pb-2 hover:bg-green-500">Add To Cart</button>

</div>
<div className="flex flex-2 p-11  w-[68%] justify-start flex-col flex-nowrap
sm:w-[100%]
sm:py-0
sm:flex-col-reverse
">
    
    <h2 className="font-semibold text-[2.5rem] mb-3 mt-5  sm:hidden">{title}</h2>

    <p className="pr-11 text-[16px]
    sm:mt-0
    sm:p-2
    sm:text-[1.4rem]
    ">{description}
        </p>
       
       <div
       >
       <p className="text-[28px] mt-1 sm:hidden">Price: <span className="font-bold">{price}$</span></p>
       <div className="flex flex-row ">
       <p>Color : </p><div className={' bg-red-500 '+colorStyle}><input type="radio" className="opacity-0 w-[100%] h-[100%] "  name="color"/></div>
       <div className={' bg-blue-500 '+colorStyle}><input type="radio" name="color" className="opacity-0 w-[100%] h-[100%]" /></div>
       <div className={' bg-yellow-500 '+colorStyle}><input type="radio" name="color" className="opacity-0 w-[100%] h-[100%]" /></div>
       
       </div>
<div className="sm:flex sm:flex-row  sm:justify-between">
<select name=""   className='font-light shadow-md mt-3 w-[100px]' id="">
    <option selected disabled value="">Size</option>
    <option   value="">Small</option>
    <option   value="">Meduim</option>
    <option   value="">Large</option>
    <option   value="">Xl</option>
</select>
<div className="flex flex-row items-center"><p  className="mt-6 font-bold mr-10"> Quantity</p>

<div className="sm:mt-5">
<Qty />
</div>

</div>
</div>
<button className="bg-[#8a4af3] w-[100px] mt-5 p-1 text-white font-bold rounded-md shadow-lg pt-2 pb-2 hover:bg-green-500 sm:hidden">Add To Cart</button>

       </div>
       </div>

</div>}
<NewsLetter/>
<Footer/>
    </div>);
}
export default ProductPage  ; 