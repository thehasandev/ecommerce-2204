import React, { useState } from 'react'

import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import DropMenu from '../Icon/DropMenu'
import Button from "../Button"
import ImageOne from "../../assets/product1.png"


import {BiSolidUser} from "react-icons/bi"
import {AiFillCaretDown,AiOutlineCloseSquare} from "react-icons/ai"
import {GrFormClose} from "react-icons/gr"
import {BsCartFill} from "react-icons/bs"

import Search from '../Search'
import { Link } from 'react-router-dom'

import { bradcrumb } from '../../slices/bratcrumbSlice'
import PortionHeading from '../PortionHeading'

import { useDispatch } from 'react-redux'



function Searchbar() {
  const dispatch =useDispatch()

  
  const [open,setOpen]=useState(false)



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
                        <BsCartFill onClick={()=>{setOpen(true)}} className='cursor-pointer'/>
                        
                        <div className='absolute top-[-13px] left-[15px]   text-xl font-dm font-bold text-primary '>
                          5
                        </div>
                       </div>

                {/* Add to cart Sidebar      */}
                 <div className={`w-2/6 h-screen  bg-[#e3e3e3] duration-500 absolute top-0 z-10 ${open ? "right-0":"right-[-50%] duration-700"}`}>
                       <Flex className="justify-end pr-4 pt-4">
                         <GrFormClose size={40} onClick={()=>{setOpen(false)}}/>
                       </Flex>
                       <PortionHeading text="SHOPPING CART" className=" border-b border-solid px-2 border-primary pb-5"/>
                         
                         <ul className='flex justify-between mt-5 px-2 '>
                            <li className='font-dm font-bold text-base text-primary'>Action</li>
                            <li className='font-dm font-bold text-base text-primary'>Product</li>
                            <li className='font-dm font-bold text-base text-primary'>Name</li>
                            <li className='font-dm font-bold text-base text-primary'>Price</li>
                            <li className='font-dm font-bold text-base text-primary'>Quantity</li>
                            <li className='font-dm font-bold text-base text-primary'>Subtotal</li>
                         </ul>
      
               <ul  className='flex items-center  mt-5 bg-[#454449] py-2'>
                            
                            <li  className='w-32 pl-5'>
                              <AiOutlineCloseSquare size={30} className='text-white '/>
                            </li>
                            
                            <li className='w-16 px-1 '>
                              <img src={ImageOne} alt="" className='w-full'/>
                            </li>

                            <li className='w-[200px] pl-8   font-dm font-medium text-base text-center text-white'>
                              Productone
                            </li>

                            <li className='w-36 pl-2  font-dm font-medium text-base  text-white'>
                             500
                            </li>

                            <li className='w-16  font-dm  font-bold text-base text-white border border-white flex justify-center gap-x-2 items-center '>
                              <button className='text-xl text-white'>-</button>
                              5
                              <button  className='text-xl text-white'>+</button>
                            </li>

                            <li className='w-36 text-right pr-4 font-dm font-medium text-base text-white'>
                              5000
                            </li>
                      </ul>


                         <p className='font-dm font-medium text-xl pr-5 mt-12 text-right text-primary'>Tottal : 100000</p>

                         <Flex className="justify-center mt-5 gap-x-5 ">
                              <div className='w-5/12' onClick={()=>setOpen(false)}>
                                <Link to="/checkout">
                                  <Button text="CHECK OUT NOW" hover className="w-full rounded-[5px] bg-[#454449] border-[#454449]"/>
                                </Link>
                              </div>
                   
                            <div className='w-5/12' onClick={()=>setOpen(false)}>
                              <Link to="card">
                                  <Button text="VIEW CART"   className="w-full rounded-[5px] "/>
                              </Link>   
                            </div>

                         </Flex>

                       

                

                 

                    </div>
                   
                 
                </Flex>
            </Flex>
        </Container>
    </Section>
  )
}

export default Searchbar