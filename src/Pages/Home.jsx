import React, { useEffect, useState } from 'react'

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

import axios from 'axios'

function Home() {
  const [productData,setProductData] = useState([])

  useEffect(()=>{
    const asn = async()=>{
      const data = await axios.get("http://localhost:1337/api/products?populate=*")
      setProductData(data.data.data)
    }
    asn()
  },[])
   

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
          
         {
          productData.map((item)=>(
            <div key={item.id} className='w-24'>
                    <Product productName={item.attributes.title} price={item.attributes.price}  src={`http://localhost:1337${item.attributes.product_img.data[0].attributes.url}`} badge={item.attributes.badge} />
            </div>
          ))
         } 
        </Slider>
      </div>

       
     </Container>
   </Section>

   <Section className="mt-36">
     <Container>
        <SubHeading text="Our BestSelling" className="mb-5" price={60} src={Product5}/>
         <Flex className="justify-between">   
         {
          productData.map((item)=>{
            if(item.attributes.cetagoris == "bestseller"){
             return  <div key={item.id} className='w-24'>
                     <Product productName={item.attributes.title} price={item.attributes.price}  src={`http://localhost:1337${item.attributes.product_img.data[0].attributes.url}`} badge={item.attributes.badge} />
                     </div>
            }
          }
           
          )
         } 
         </Flex>
     </Container>
   </Section>
    </>
  )
}

export default Home