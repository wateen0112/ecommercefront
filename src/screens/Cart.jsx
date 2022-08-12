
import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
import productsData from "../data/prodductsData";
import Qty from "../components/Qty";
function Cart() {
  return (
    <div>

<Announce/>
<Navbar/>
<div className=" sm:flex sm:justify-center sm:flex-col sm:flex-wrap">
    <h1 className="text-[3rem] font-semibold text-center">Cart</h1>
    <div className="flex justify-between items-center sm:justify-center sm:flex-col s:flex-wrap" >
<div className="flex flex-1 justify-start   p-5 items-center"><button className="border-[#8a4af3]  text-[#8a4af3] font-semibold font-[18px] border-solid border-2 px-5 py-3 rounded-lg hover:bg-[#8a4af3] hover:text-white">Continue Shopping</button></div>
<div className="flex flex-1 justify-center  p-5  items-center"> <p className="text-blue-800 underline mr-5">Items in Whish List 5</p>  <p className="text-blue-800 underline">Items in  Cart 2 </p></div>
<div className="flex flex-1 justify-end   p-5 items-center"><button className="bg-[#8a4af3]  text-white font-semibold font-[18px] border-solid border-2 px-5 py-3 rounded-lg hover:bg-[white] hover:border-[#8a4af3] hover:text-[#8a4af3]">Checkout Now !</button></div>
    </div>
    <div className="flex row items-center justify-between w-[100%]  sm:w-[100%] sm:flex-col sm:flex-center">

        <div className="flex flex-1 justify-start  flex-col">
            <CartProduct item={productsData[0]}/>
            <CartProduct item={productsData[1]}/>
        </div>
 
        <div className="flex flex-1 justify-end pr-5 sm:p-0 sm:mb-5">
            <div className="border-[#8a4af3] border-solid border-2 rounded-lg w-[350px] h-[300px] flex flex-col text-center">
                <h1 className="text-[2.2rem] uppercase">Sammary</h1>
               
               <div className="w-[100%] flex justify-between  font-semibold p-3">    <p >Sub Total :</p> <p>$120</p> </div>
               <div className="w-[100%] flex justify-between  font-semibold p-3">    <p >Shipping:</p> <p>$10</p> </div>
               <div className="w-[100%] flex justify-between  font-semibold p-3">    <p >Shipping discount  :</p> <p>-$10</p> </div>
               <div className="w-[100%] flex justify-between  font-bold text-[2rem] p-3">    <p > Total :</p> <p>$140</p> </div>
             
            </div>
        </div>
    </div>
</div>
<NewsLetter/>
<Footer/>

    </div>
  )
}

export default Cart