import React, { useEffect, useState } from 'react'

import Section from "../components/Section"
import Container from "../components/Container"
import Product from '../components/Product'
import Flex from '../components/Flex'
import SubHeading from "../components/SubHeading"

import Image from '../components/Image'

import One from "../assets/product1.png"
import Two from "../assets/product2.png"
import Three from "../assets/product3.png"
import Four from "../assets/product4.png"
import Five from "../assets/product5.png"
import Six from "../assets/product6.png"
import Seven from "../assets/product7.png"
import Eight from "../assets/product8.png"
import Nine from "../assets/product18.png"
import Ten from "../assets/product10.png"
import Eleven from "../assets/product11.png"
import Twilve from "../assets/product13.png"


import IconTwo from "../assets/2.png"
import Car from "../assets/car.png"
import Return from "../assets/return.png"
import OfferOne from "../assets/fasilityOne.png"
import OfferTwo from "../assets/fasilityTwo.png"
import OfferThree from "../assets/fasilityThree.png"
import Year from "../assets/year.png"

import Banner from "../assets/banner.png"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

import PrevSlide from "../components/PrevSlide"
import NextSlide from "../components/NextSlide"
import Facility from '../components/Facility'





function Home() {
  const settingBanner = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    appendDots: dots => (
      <div>
        <ul className={`absolute lg:top-1/2 lg:left-36 left-5 top-[100px] -translate-y-full `}>{dots}</ul>
      </div>
    ),
    
    customPaging: i => (
      <button className={i==0 ? "text-[red]" : i==1 ? "text-[blue]": "text-[green]"}>
        0{i + 1 }
      </button>
    ),
  };

  const settingProduct = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextSlide class="absolute top-1/2 -translate-y-full right-5  z-10"/>,
    prevArrow:<PrevSlide class="absolute top-1/2 -translate-y-full left-5 z-10"/>
  };

  return (
    <>

   
     <Section >
        <Slider {...settingBanner}>
          <Image src={Banner}/>
          <Image src={Banner}/>
          <Image src={Banner}/>
        </Slider>
     </Section> 
     
 
     <Section className="mt-2 mb-40">
       <Container>
         <Flex className="justify-between">
            <Facility src={IconTwo} alt="two" title="Two years warranty"/>
            <Facility src={Car} alt="two" title="Free shipping"/>
            <Facility src={Return} alt="two" title="Return policy in 30 days"/>
         </Flex>
       </Container>
     </Section>

     <Section>
       <Container>
         <Flex className="justify-between"> 
           <div className='w-49'>
             <Image src={OfferOne} className="w-full"/>
           </div>

           <div className='w-49'>
              <Image src={OfferTwo} className="mb-10 w-full"/>
              <Image src={OfferThree} className=" w-full"/>
           </div>
         </Flex>
       </Container>
     </Section>

     <Section className="mt-32">
       <Container>
         <SubHeading text="New Arrivals" className="mb-12"/>
            <Slider {...settingProduct}>
                <div className='w-24'>
                  <Product  src={One} alt="One" productName="New Arrival 1" price={44} badge="New"/>
                </div>
             
                <div className='w-24'>
                  <Product  src={Two} alt="One" productName="New Arrival 2" price={44} badge="New"/>
                </div>
             
                <div className='w-24'>
                  <Product  src={Three} alt="One" productName="New Arrival 3" price={44} badge="New"/>
                </div>
             
                <div className='w-24'>
                  <Product  src={Four} alt="One" productName="New Arrival 4" price={44} badge="New"/>
                </div>
             
                <div className='w-24'>
                  <Product  src={Five} alt="One" productName="New Arrival 5" price={44} badge="New"/>
                </div>
             
                <div className='w-24'>
                  <Product  src={Six} alt="One" productName="New Arrival 6" price={44} badge="New"/>
                </div>
             
            </Slider>
       </Container>
     </Section>


     <Section className="mt-32">
        <Container>
          <SubHeading text="Best Selling" className="mb-12"/>
              <Flex className="justify-between">
                <div className='w-24'>
                  <Product  src={Five} alt="One" productName="Best Selling 1" price={44} badge="New"/>
                </div>

                <div className='w-24'>
                  <Product  src={Six} alt="One" productName="Best Selling 2" price={44} badge="New"/>
                </div>

                <div className='w-24'>
                  <Product  src={Seven} alt="One" productName="Best Selling 3" price={44} badge="New"/>
                </div>

                <div className='w-24'>
                  <Product  src={Eight} alt="One" productName="Best Selling 4" price={44} badge="New"/>
                </div>
              </Flex>
        </Container>
     </Section>
    

    {/* Hasan  */}

    <Section className="mt-32">
      <Container>
        <Image src={Year} alt="Year" className="w-full"/>
      </Container>
    </Section>

     <Section className="mt-32">
        <Container>
          <SubHeading text="Special Offers" className="mb-12"/>
              <Flex className="justify-between">
                <div className='w-24'>
                  <Product  src={Nine} alt="One" productName="Special Offers 1" price={44} badge="New"/>
                </div>

                <div className='w-24'>
                  <Product  src={Ten} alt="One" productName="Special Offers 2" price={44} badge="New"/>
                </div>

                <div className='w-24'>
                  <Product  src={Eleven} alt="One" productName="Special Offers 3" price={44} badge="New"/>
                </div>

                <div className='w-24'>
                  <Product  src={Twilve} alt="One" productName="Special Offers 4" price={44} badge="New"/>
                </div>
              </Flex>
        </Container>
     </Section>
    </>
  )
}

export default Home