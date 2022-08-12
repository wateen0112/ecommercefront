import React, {useEffect} from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import productsData from '../data/prodductsData';

import { useDispatch, useSelector } from 'react-redux/es/exports';

import { setCategories, setProducts } from '../redux/actions/productsActions'; 
import axios from 'axios';
function Home (){
    useEffect(() => {
        getAllProducts()
      getAllCategories()
      }, []);
      
    const dispatch= useDispatch();
    const products = useSelector((state)=>state.allProducts.products)
    const categories = useSelector((state)=>state.allCategories.gategories)
 
 const getAllCategories  = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products/categories').catch(err=>console.log(err));
    dispatch(setCategories(response.data));
    console.log(response.data);
 }
    const getAllProducts =async ()=> {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>console.log(err));
    dispatch(setProducts(response.data))
    
    console.log(response.data);
   
      }
    return(<div>
<Announce/>
<Navbar/>
<Slide/>

<CategoriesList/>
<h1 className="text-center font-bold text-[3rem] underline">Our Products</h1>
<ProductsList mainpage={true}/>
<NewsLetter/>
<Footer/>
    </div>);
}
export default Home  ; 