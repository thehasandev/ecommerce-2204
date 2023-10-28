import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import {AiOutlineRight} from "react-icons/ai"

import {Link} from "react-router-dom"

import { useSelector } from 'react-redux'
import Product from '../components/Product'
import Section from '../components/Section'
import Pagination from '../components/Pagination'


function ProductShop() {
  let pageName = useSelector((state)=>state.bractcumb.previusName)
  let [show,setShow] =useState(12)

  return (
    <Section className="mt-124">
      <Container>
      <h2 className='font-dm font-bold text-text49 text-primary'>Product</h2>

      <Flex className="items-center gap-x-2">

      <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase flex items-center gap-x-2'>
          <Link to={pageName=="Home" ? "/" :pageName=="Sing up" ? "/sing-up" : `/${pageName.toLowerCase()}`}>
            {pageName}
          </Link>
      
        <AiOutlineRight/>
        </p>

        <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ")}</p>
      </Flex>
        
        <Section>
           <Container>
              <Flex className="mt-14">
                 <div className='w-2/12'>asdfsad</div>
                 <div className='w-10/12'>
                  <select onChange={(e)=>{setShow(e.target.value)}} name="" id="">
                     <option>3</option>
                     <option>6</option>
                     <option>12</option>
                     <option>12</option>
                  </select>
                    <Pagination itemsPerPage={show}/>
                 </div>
              </Flex>
           </Container>
        </Section>

      </Container>
    </Section>
  )
}

export default ProductShop