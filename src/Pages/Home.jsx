import React from 'react'

import Section from "../components/Section"
import Container from "../components/Container"
import Product from '../components/Product'
import Flex from '../components/Flex'
import SubHeading from "../components/SubHeading"

function Home() {
  return (
    <>
   <Section>
     <Container>
        <SubHeading/>
         <Flex className="justify-between">
            <div className='w-96'>
                <Product/>
            </div>
            <div className='w-96'>
                <Product/>
            </div>
            <div className='w-96'>
                <Product/>
            </div>
            <div className='w-96'>
                <Product/>
            </div>
         </Flex>
     </Container>
   </Section>
    </>
  )
}

export default Home