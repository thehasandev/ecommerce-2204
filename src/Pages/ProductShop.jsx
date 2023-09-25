import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import {AiOutlineRight} from "react-icons/ai"

import {Link} from "react-router-dom"

import { useSelector } from 'react-redux'
import Product from '../components/Product'


function ProductShop() {
  let pageName = useSelector((state)=>state.bractcumb.previusName)
  console.log(pageName);
  return (
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

     <div className='w-[500px] mt-5'>
       <Product/>
     </div>

   </Container>
  )
}

export default ProductShop