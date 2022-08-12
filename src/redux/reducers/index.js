import { combineReducers } from "redux";
import { categoriesReducer, productReducer,selectedProductReducer } from "./productReducers";

const reducers = combineReducers(
 {
   allProducts:productReducer,
    product :selectedProductReducer,
    allCategories:categoriesReducer
 }
)
export default reducers
