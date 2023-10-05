import React from 'react'

import Section from "../components/Section"
import Container from "../components/Container"
import Product from '../components/Product'
import Flex from '../components/Flex'
import SubHeading from "../components/SubHeading"
import Product1 from "../assets/product1.png"
import Product2 from "../assets/product2.png"
import Product3 from "../assets/product3.png"
import Product4 from "../assets/product4.png"
import Product5 from "../assets/product5.png"
import Product6 from "../assets/product6.png"
import Product7 from "../assets/product7.png"
import Product8 from "../assets/product8.png"
import Product9 from "../assets/product9.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import PrevSlide from "../components/PrevSlide"
import NextSlide from "../components/NextSlide"

function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextSlide/>,
    prevArrow:<PrevSlide/>
  };
  return (
    <>
   <Section className="overflow-x-hidden">
     <Container>
     <SubHeading text="New Arrivals" className="mb-5"/>
     <div className='relative'>
        <Slider {...settings}>
          <div className='w-24'>
                  <Product productName="Product One" price={44}  src={Product1}/>
          </div>
          <div className='w-24'>
                  <Product productName="Product Two" price={44}  src={Product2}/>
          </div>
          <div className='w-24'>
                  <Product productName="Product Three" price={44}  src={Product3}/>
          </div>
          <div className='w-24'>
                  <Product productName="Product Four" price={44}  src={Product4}/>
          </div>
          <div className='w-24'>
                  <Product productName="Product Five" price={44}  src={Product5}/>
          </div>
          <div className='w-24'>
                  <Product productName="Product Six" price={44}  src={Product6}/>
          </div>
          
        </Slider>
      </div>

       
     </Container>
   </Section>

   <Section className="mt-36">
     <Container>
        <SubHeading text="Our BestSelling" className="mb-5" price={60} src={Product5}/>
         <Flex className="justify-between">
            
            <div className='w-24'>
              <Product productName="Product Five" price={50} src={Product6}/>
            </div>
            
            <div className='w-24'>
               <Product productName="Product Six" price={88} src={Product7}/>
            </div>

            <div className='w-24'>
               <Product productName="Product Seven" price={96} src={Product8}/>
            </div>

            <div className='w-24'>
              <Product productName="Product Eight" price={99} src={Product9}/>
            </div>

         </Flex>
     </Container>
   </Section>
    </>
  )
}

export default Home