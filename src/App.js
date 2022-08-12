
import './index.css';
import Home from './screens/home';
import React,{useEffect} from 'react';
import Categories from './screens/Categories';
import ProductPage from './screens/ProductPage';
import Cart from './screens/Cart';
import CategoriesList from './components/CategoriesList';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
function App() {

  return (
 <div>
     <>
     <BrowserRouter>
    <Routes>
          <Route path="/categories/:category" element={        <Categories />}>
          </Route>
          <Route path="/product/:id" element={  <ProductPage />}>
          
          </Route>
          <Route path="/login" element={  <Login />}>
          
          </Route>
          <Route path="/" element={ <Home />}>
           
          </Route>
          <Route path="/cart" element={ <Cart />}>
           
           </Route>
          </Routes>
        </BrowserRouter>
        </>
      </div>


 
  
  );
}

export default App;
