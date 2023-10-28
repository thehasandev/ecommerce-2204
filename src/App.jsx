import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";

import Home from "./Pages/Home"
import Error from "./Pages/Error"
import RouteLayouts from './components/RouteLayouts';
import Singup from './Pages/Singup';
import ProductShop from './Pages/ProductShop';
import Login from './Pages/Login';
import Contacts from './Pages/Contacts';
import Checkout from './Pages/Checkout';
import About from './Pages/About';
import Card from './Pages/Card';
import ProductDetails from './Pages/ProductDetails';
import "./App.css"


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RouteLayouts/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/product-details' element = {<ProductDetails/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/sing-up' element = {<Singup/>}/>
      <Route path='/shop' element = {<ProductShop/>}/> 
      <Route path='/checkout' element = {<Checkout/>}/> 
      <Route path='/contact' element = {<Contacts/>}/> 
      <Route path='/about' element = {<About/>}/> 
      <Route path='/card' element = {<Card/>}/> 
      <Route path='*' element = {<Error/>}/>
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

