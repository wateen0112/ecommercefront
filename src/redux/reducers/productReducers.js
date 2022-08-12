import { ActionTypes } from "../constants/actions-type";

const initstate ={
    products:[
     
    ],
    categories:[]
}
export const productReducer=( state =initstate , {type,data})=> {
switch (type){
    case  ActionTypes.SET_PRODUCTS:
        
        return {
            ...state , products:data
        };
        default : {
         
            return state;
        } 
}
}
export const selectedProductReducer = (state=initstate , {type,data})=>{
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state ,...data
            }
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {
                  type:ActionTypes.REMOVE_SELECTED_PRODUCT
                }
            default : return state; 
    } 
}
export const categoriesReducer =(state  = initstate,{type,data})=>{

switch(type){
    case ActionTypes.SET_CATEGORIES : return  {
      ...state,categories:data
    }
    default:return state
}
}