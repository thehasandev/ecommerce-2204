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

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RouteLayouts/>}>
      <Route path='/' element = {<Home/>}/>
      <Route path='/sing-up' element = {<Singup/>}/>
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

