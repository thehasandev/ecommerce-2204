import React from 'react'

import Flex from './components/Flex'
import List from './components/List'
import SubHeading from './components/SubHeading'
import PortionHeading from './components/PortionHeading'
import Image from './components/Image'
import Logo from "./assets/logo.png"
import Facility from './components/Facility'
import Button from './components/Button'
import Product from './Product'
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevSlide from './components/PrevSlide'
import NextSlide from "./components/NextSlide"


function App() {

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevSlide />,
    nextArrow: <NextSlide />,

  }

  return (
    <>
  
  <Slider {...settings}>

   <div className='w-80'>
    <Product/> 
   </div>
 
   <div className='w-80'>
    <Product/> 
   </div>
 
   <div className='w-80'>
    <Product/> 
   </div>
 
   <div className='w-80'>
    <Product/> 
   </div>
 
   <div className='w-80'>
    <Product/> 
   </div>
 
   <div className='w-80'>
    <Product/> 
   </div>

  </Slider>

    
{/* 

<Button text="Shop Now " hover/>
<Button text="Add to Wish List " /> 

*/}



{/* <Facility/> */}

{/* <Image src={Logo} alt="logo" /> */}



{/* <PortionHeading text=" Portion Heading " className= "text-base"/>  */}




{/* <SubHeading text = "Sub Heading" className="text-text39"/>  */}



 {/* 
  <List text="Menu" />
  <List text="Home" />
  <List text="City"/> 
*/}


{/*
<Flex className="justify-between">
   <h1>Hasan</h1>
   <h1>Hasan</h1>
</Flex>

*/}
    </>
  )
}

export default App