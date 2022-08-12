import {ActionTypes} from '../constants/actions-type'



  export const  setProducts= (products)=>{
    return  {
        type :ActionTypes.SET_PRODUCTS,
        data:products
    }
 }
 export const  selectProduct= (product)=>{
    return  {
        type :ActionTypes.SELECTED_PRODUCT,
        data:product
    }
 }
 export const  removeSelectedProduct= ()=>{
    return  {
      type :ActionTypes.REMOVE_SELECTED_PRODUCT, 
    }

 }
 export const setCategories = (categories)=>{
return {
   type:ActionTypes.SET_CATEGORIES,
   data :categories
}
 }
