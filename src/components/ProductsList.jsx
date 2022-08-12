import { render } from '@testing-library/react';
import React ,{ useEffect,Suspense} from 'react'
import Loading from './loading components/Loading'; 
import { useSelector } from 'react-redux';
import ProductLoading from './loading components/ProductLoading';

const Product = React.lazy(() => import("./Product"));


function ProductsList(props) {

 
const products = useSelector((state)=>state.allProducts.products)
console.log('cattt:',props.category)
const newProducts = props.mainpage?products : products.filter((i)=>i.category ===props.category)
console.log(newProducts)
const renderList = newProducts.map((product)=>{
  return( <Suspense fallback={<ProductLoading/>}>
    <Product item = {product}   key  = {product.id}/>
  </Suspense>)
})


  return (
   
<div className='flex justify-center items-center md:justify-center flex-row flex-wrap mt-5'>
<>
 {
renderList.length==0 ?<Loading/>:renderList
}</>
</div>

  )
}

export default ProductsList