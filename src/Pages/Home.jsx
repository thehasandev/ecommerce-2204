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

import Aone from "../assets/fasilityOne.png"
import Atwo from "../assets/fasilityTwo.png"
import Athree from "../assets/fasilityThree.png"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import PrevSlide from "../components/PrevSlide"
import NextSlide from "../components/NextSlide"

import axios from 'axios'
import Facility from '../components/Facility'

function Home() {
  const [banner,setBannerData] =useState([])
  const [fascilitie,setFascilitie] =useState([])
  const [productData,setProductData] = useState([])
  const [bannerTwo,setBannerTwo] = useState([])
   
  // banner 
  useEffect(()=>{
     const asy =async()=>{
        let data = await axios.get("http://localhost:1337/api/banners?populate=*")
        setBannerData(data.data.data);
     }
     asy()
  },[])
  
  //Facilities
  useEffect(()=>{
    const a =async()=>{
     const data =await axios.get("http://localhost:1337/api/facilities?populate=*")
     setFascilitie(data.data.data)
    }
    a()
  },[])

  // product 
  useEffect(()=>{
    const asn = async()=>{
      const data = await axios.get("http://localhost:1337/api/products?populate=*")
      setProductData(data.data.data)
    }
    asn()
  },[])

  //Banner Tow
  useEffect(()=>{
    const asnk = async()=>{
       const data = await axios.get("http://localhost:1337/api/banner-twos?populate=*")
      setBannerTwo(data.data.data);
    }
    asnk()
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

    {/* banner  */}
    <Section>
        {
          banner.map(item=>(
            <img key={item.id} src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`} alt="" />
          ))
        }
    </Section>
    
    {/* Facilitis  */}
    <Section className="mt-8 mb-32">
      <Container>
         <Facility/>
        
         <Flex className="justify-between mt-32">
          {
            fascilitie.map((item)=>{
              if(item.attributes.title == "one"){
                 return   <img key={item.id} src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`}/> 
              }
            })
          }

          <div className='flex flex-col gap-y-10'>
              {
                fascilitie.map((item)=>{
                  if(item.attributes.title == "two"){
                    return   <img key={item.id} src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`}/> 
                  }
                })
              }
          </div>

        </Flex>
      </Container>
    </Section>

  {/* New Arrival  */}
    <Section>
      <Container>
      <SubHeading text="New Arrivals" className="mb-12"/>
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
  
  {/* Best Selling  */}
    <Section className="mt-36">
      <Container>
          <SubHeading text="Our BestSelling" className="mb-12" price={60} src={Product5}/>
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

    {/* Banner Tow  */}
    <Section className="my-32">
      <Container>
        {bannerTwo.map(item=>(
          <img key={item.id} src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}/>
        ))}
      </Container>
    </Section>

    {/* Special Offers */}

    <Section className="mt-36">
      <Container>
          <SubHeading text="Special Offers" className="mb-12" price={60} src={Product5}/>
          <Flex className="justify-between">   
          {
            productData.map((item)=>{
              if(item.attributes.cetagoris == "special"){
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