import React from 'react'

import Section from "../components/Section"
import Container from "../components/Container"
import Product from '../components/Product'
import Flex from '../components/Flex'
import SubHeading from "../components/SubHeading"
import Product1 from "../assets/product1.png"

function Home() {
  return (
    <>
   <Section className="overflow-x-hidden">
     <Container>
        <SubHeading text="New Arrivals" className="mb-5"/>
         <Flex className="justify-between ">
              <div className='w-24'>
                <Product productName="Product One" price={44}  src={Product1}/>
              </div>

              <div className='w-24'>
                 <Product productName="Product Two" price={56} src={Product1}/>
              </div>

              <div className='w-24'>
                 <Product productName="Product Three" price={80}  src={Product1}/>
              </div>

              <div className='w-24'>             
                <Product productName="Product Four" price={90}  src={Product1}/>
              </div>
         </Flex>
     </Container>
   </Section>

   <Section className="mt-36">
     <Container>
        <SubHeading text="Our BestSelling" className="mb-5" price={60} src={Product1}/>
         <Flex className="justify-between">
            
            <div className='w-24'>
              <Product productName="Product Five" price={50} src={Product1}/>
            </div>
            
            <div className='w-24'>
               <Product productName="Product Six" price={88} src={Product1}/>
            </div>

            <div className='w-24'>
               <Product productName="Product Seven" price={96} src={Product1}/>
            </div>

            <div className='w-24'>
              <Product productName="Product Eight" price={99} src={Product1}/>
            </div>

         </Flex>
     </Container>
   </Section>
    </>
  )
}

export default Home