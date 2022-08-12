import React ,{useEffect}from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

import { removeSelectedProduct } from '../redux/actions/productsActions';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
function Categories() {
    const params = useParams();
  
    const category = params.category;

    
  return (
    <div>
<Announce/>
<Navbar/>
<div className='w-[100%] flex justify-between font-bold items-center p-7 
sm:p-0
sm:justify-center
sm:flex-col
'>

<div className='sm:flex sm:flex-col'>
<h1 className='text-[2rem] w-[100%] sm:text-center sm:text-[4rem] sm:mb-5 '>
   {category}
    </h1>
    <p className='sm:text-center sm:text-[1.7rem]'>Fillterd By</p>
    <div className='flex justify-between items-center w-[40%]  sm:w-[100%] sm:justify-around'>

<select name=""   className='font-light shadow-md mt-3 mr-5' id="">
    <option selected disabled value="">Size</option>
    <option   value="">Small</option>
    <option   value="">Medium</option>
    <option   value="">Large</option>
    <option   value="">XL</option>
</select>
<select name=""   className='font-light shadow-md mt-3' id="">
    <option selected disabled value="">Color</option>
    <option   value="">Light</option>
    <option   value="">Dark</option>
    <option   value="">Darker</option>
    <option   value="">Colurful</option>
</select>
    </div>
</div>


<div>

    <p className='font-light sm:font-bold sm:text-center sm:my-5 sm:text-[1.7rem]'>Sorted By</p>
    <div className='flex justify-between items-center w-[40%]'>

<select name=""   className='font-light shadow-md mt-3 mr-5' id="">
    <option selected disabled value="">Newest</option>
    <option   value="">Oldest</option>
    <option   value="">Summer</option>
    <option   value="">Winter</option>
    <option   value="">Spring Collection</option>
</select>

    </div>
    </div>
</div>

<ProductsList  mainpage={false} category={category}/>
<NewsLetter/>
<Footer/>

    </div>
  )
}

export default Categories