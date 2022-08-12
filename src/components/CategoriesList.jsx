import React  from 'react'
import Category from './Category';
import categoriesData from '../data/categoriesData';
import {Link}from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
function CategoriesList() {
const getCategories = async  ()=>{
  // const reponse 
}
const categories = useSelector((state)=>state.allCategories.categories);
console.log(categories);

  return (
    <div  className='flex justify-between  px-20 flex-row flex-wrap items-center w-[100%]   p-5 md:justify-center md:flex-col '>
   

      {categories.map((category )=>
<Link to={"categories/"+category}>
<div className='px-10 py-1 text-center my-5 mx-2  bg-gray-200 border-[3px] capitalize cursor-pointer border-[solid] border-blue-300 rounded-full font-bold'> {category}</div>

</Link>
)}
    </div>
  )
}

export default CategoriesList