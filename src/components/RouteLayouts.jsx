import React from 'react'

import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"
import { Outlet } from 'react-router-dom'

function RouteLayouts() {
  return (
    <div>
        <Navbar/>
         <Outlet/>
        <Footer/>
    </div>
  )
}

export default RouteLayouts