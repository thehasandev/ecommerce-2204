import React, { useState } from 'react'

import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import DropMenu from '../Icon/DropMenu'
import Button from "../Button"

import {BiSolidUser} from "react-icons/bi"
import {AiFillCaretDown} from "react-icons/ai"
import {GrFormClose} from "react-icons/gr"
import {BsCartFill} from "react-icons/bs"
import Search from '../Search'
import { Link } from 'react-router-dom'



import { useDispatch, useSelector } from 'react-redux'
import { bradcrumb } from '../../slices/bratcrumbSlice'
import PortionHeading from '../PortionHeading'

function Searchbar() {
  let [open,setOpen]=useState(false)
  let dispatch  = useDispatch()

  let cartData =useSelector((state)=>state.card)
  
 
  
  let handleNameClick=(name)=>{
    dispatch(bradcrumb(name))
  }

  return (
    <Section className="bg-ash py-6 mb-124">
        <Container>
            <Flex className="justify-between items-center">
                <Flex className='w-1/5 gap-x-2.5 items-center'>
                    <DropMenu/>
                    <p className='font-dm font-normal text-sm text-primary'>Shop by Category</p>
                </Flex>
                <div className='w-3/5'>
                  <Search placeholder="Search Products"/>  
                </div>

                <Flex className='w-1/5 gap-x-10 justify-end'>
                    <Flex>
                      <Link to="/sing-up" onClick={()=>{handleNameClick("Sing up")}}>
                         <BiSolidUser/>
                      </Link>
                    
                    <AiFillCaretDown/>
                    </Flex>
                       
                       <div className='relative'>
                        <BsCartFill onClick={()=>{setOpen(true)}}/>
                        
                        <div className='absolute top-[-13px] left-[15px]   text-xl font-dm font-bold text-primary '>
                          {cartData.card.length}
                        </div>
                       </div>

                    
                    <div className={`w-2/6 h-screen  bg-[#e3e3e3] duration-500 absolute top-0 pr-16 pl-16 pb-16 pt-8 z-10 ${open ? "right-0":"right-[-50%] duration-700"}`}>
                       <Flex className="justify-end">
                         <GrFormClose size={40} onClick={()=>{setOpen(false)}}/>
                       </Flex>
                       <PortionHeading text="SHOPPING CART" className="mt-5 border-b border-ash pb-5"/>
                      
                      {
                        cartData.card.map((item,index)=>(
                          <Flex key={index} className="mt-5 mb-8">
                              <div className='w-2/6 text-center'>
                                <PortionHeading text="Product" className="text-xl mb-5"/>
                                
                                <div className=" w-16 mx-auto">
                                  <img src={item.imgUrl} alt="" />
                                </div>
                              
                              </div>

                              <div className='w-2/6 text-center'>
                                <PortionHeading text="Name" className="text-xl mb-5"/>
                                <p className='font-dm font-bold text-base text-primary'>{item.title}</p>
                              </div>

                              <div className='w-2/6 text-center'>
                                <PortionHeading text="Price" className="text-xl mb-5"/>
                                <p className='font-dm font-bold text-base text-primary'>{item.price}</p>
                              </div>

                              <div className='w-2/6 text-center'>
                              <PortionHeading text="Quantity" className="text-xl mb-5"/>
                              <p className='font-dm font-bold text-base text-primary '>{item.quantity}</p>
                              </div>
                          </Flex>

                        )
                          
                        
                          
                        )
                      }
                    

                        <div>
                          <Link to="/checkout">
                             <Button text="CHECK OUT NOW" hover className="w-full my-5 rounded-[5px]"/>
                          </Link>
                        </div>

                       <Link to="card">
                          <Button text="VIEW CART"   className="w-full rounded-[5px]"/>
                       </Link>
                    </div>
                </Flex>
            </Flex>
        </Container>
    </Section>
  )
}

export default Searchbar