import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Error from './Pages/Error'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
        <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App