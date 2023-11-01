import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import {AiOutlineRight} from "react-icons/ai"

import {Link} from "react-router-dom"

import { useSelector } from 'react-redux'
import Product from '../components/Product'
import Section from '../components/Section'
import Pagination from '../components/Pagination'
import PortionHeading from '../components/PortionHeading'
import List from "../components/List"


function ProductShop() {
  let pageName = useSelector((state)=>state.bractcumb.previusName)
  let [show,setShow] = useState(5)
  return (
    <Section className="mt-10 lg:mt-124 px-4 xl:px-0">
      <Container>
      <h2 className='font-dm font-bold text-3xl md:text-text49 text-primary'>Product</h2>

      <Flex className="items-center gap-x-2 mt-4">

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
              <Flex className="mt-14  ">
                 <div className='md:w-2/12 hidden sm:block'>
                  <PortionHeading text="Shop by Category"/>
                    <ul>
                      <List text="Category 1" side className="mt-10"/>
                      <List text="Category 2" side/>
                      <List text="Category 3" side/>
                      <List text="Category 4" side/>
                      <List text="Category 5" side/>
                    </ul>

                    <PortionHeading text="Shop by Color" className="mt-14"/>
                    <div className='flex items-center gap-x-3 mt-10 mb-5'>
                      <div className='h-2 w-2 bg-red-500 rounded-full'></div>
                       <p className='font-dm font-bold text-sm text-gray hover:text-primary'>Color 1</p>
                    </div>
                    <div className='flex items-center gap-x-3 mb-5'>
                      <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                       <p className='font-dm font-bold text-sm text-gray hover:text-primary'>Color 2</p>
                    </div>
                    <div className='flex items-center gap-x-3 mb-5'>
                      <div className='h-2 w-2 bg-blue-500 rounded-full'></div>
                       <p className='font-dm font-bold text-sm text-gray hover:text-primary'>Color 3</p>
                    </div>
                    <div className='flex items-center gap-x-3 mb-5'>
                      <div className='h-2 w-2 bg-teal-500 rounded-full'></div>
                       <p className='font-dm font-bold text-sm text-gray hover:text-primary'>Color 4</p>
                    </div>
                    <div className='flex items-center gap-x-3 mb-5'>
                      <div className='h-2 w-2 bg-orange-500 rounded-full'></div>
                       <p className='font-dm font-bold text-sm text-gray hover:text-primary'>Color 5</p>
                    </div>

                  <PortionHeading text="Shop by Brand" className="mt-14"/>
                    <ul>
                      <List text="Brand 1" side className="mt-10"/>
                      <List text="Brand 2" side/>
                      <List text="Brand 3" side/>
                      <List text="Brand 4" side/>
                      <List text="Brand 5" side/>
                    </ul>
                  <PortionHeading text="Shop by Price" className="mt-14"/>
                    <ul>
                      <List text="$0.00 - $9.99" side className="mt-10"/>
                      <List text="$0.00 - $9.99" side/>
                      <List text="$0.00 - $9.99" side/>
                      <List text="$0.00 - $9.99" side/>
                      <List text="$0.00 - $9.99" side/>
                    </ul>
                 </div>

                
                
                 <div className='md:w-10/12 w-full'>
                  <div className='flex justify-end mb-14'>
                      <label className='font-dm text-base text-gray mr-5'>Show:</label>
                      <select value={show} onChange={(e)=>{setShow(e.target.value)}} name="w-full" id="">
                        <option></option>
                        <option>3</option>
                        <option>6</option>
                        <option>12</option>
                        <option>15</option>
                        <option>18</option>
                      </select>

                  </div>
            
                    <Pagination itemsPerPage={show == 3 ? 3 : show == 6 ? 6 : show==12 ? 12 : show == 15 ? 15 : show== 18 ? 18 : 12 }/>
                  
                 </div>
              </Flex>
           </Container>
        </Section>

      </Container>
    </Section>
  )
}

export default ProductShop