import React, { useState } from 'react'
import Section from '../components/Section'
import Container from '../components/Container'
import Image from '../components/Image'

import {AiFillStar, AiOutlineRight} from "react-icons/ai"
import {BiPlus} from "react-icons/bi"
import {GrFormSubtract} from "react-icons/gr"

import Product1 from "../assets/product22.png"
import Product2 from "../assets/product24.png"
import Product3 from "../assets/product11.png"
import Product4 from "../assets/product10.png"
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import Input from '../components/Input'

function ProductDetails() {
    let [open,setOpen] = useState(false)
    let [openTwo,setOpenTwo] = useState(false)
    let pageName = useSelector((state)=>state.bractcumb.previusName)
  return (
    <>
     
     <Section>
       <Container>
            <Flex className="items-center gap-x-2 mt-5">
                <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase flex items-center gap-x-2'>
                    <Link to={pageName == "Home" ? "/" : `/${pageName}`}>
                        {pageName} 
                    </Link>
                    <AiOutlineRight/>
                </p>
                <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/product-details", "Products")}</p>
            </Flex>
       </Container>
     </Section>
      
       <Section className="mt-32">
         <Container>
            <Flex className="flex-wrap justify-between gap-y-10">
                <div className='w-49'>
                  <Image src={Product1} className="w-full"/>
                </div>
                <div className='w-49'>
                  <Image src={Product2} className="w-full"/>
                </div>
                <div className='w-49'>
                  <Image src={Product3} className="w-full"/>
                </div>
                <div className='w-49'>
                  <Image src={Product4} className="w-full"/>
                </div>
            </Flex>
         </Container>
       </Section>

       <Section>
          <Container>
            <SubHeading text="Product" className="text-[39px]"/>
                <Flex className="justify-between w-44 items-center mt-4">
                    <Flex className='w-1/2 justify-between text-[#FFD881] items-center'>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                    </Flex>
                    <Flex className='w-45 justify-end '>
                        <p className='font-dm font-normal text-sm text-secondary'>1 Review</p>
                    </Flex>
                
                </Flex>

                <Flex className="justify-between w-44 items-center mt-8 relative after:absolute after:h-[1px] after:w-[780px] after:bg-[#D8D8D8] after:bottom-[-12px] after:left-0">
                    <div className='w-48'>
                       <p className='font-dm font-normal text-base text-secondary line-through'>$88.00</p>
                    </div>
                    <div className='w-48'>
                        <p className='font-dm font-bold text-lg text-primary'>$44.00</p>
                    </div>
                </Flex>

                <Flex className="my-7 gap-x-10 ">
                    <div>
                        <p className='font-dm font-bold text-base text-primary uppercase'>Color :</p>
                    </div>
                    <div className="gap-x-2 relative">
                        <div className='w-5 h-5 hover:w-6 hover:h-6 duration-200 bg-[#979797] rounded-full absolute top-0 left-0'></div>
                        <div className='w-5 h-5 hover:w-6 hover:h-6 duration-200 bg-[#FF8686] rounded-full absolute top-0 left-8'></div>
                        <div className='w-5 h-5 hover:w-6 hover:h-6 duration-200 bg-[#7ED321] rounded-full absolute top-0 left-16'></div>
                        <div className='w-5 h-5 hover:w-6 hover:h-6 duration-200 bg-[#B6B6B6] rounded-full absolute top-0 left-24'></div>
                        <div className='w-5 h-5 hover:w-6 hover:h-6 duration-200 bg-[#15CBA5] rounded-full absolute top-0 left-32'></div>

                    </div>
                </Flex>
                
                <Flex className="gap-x-16 items-center ">
                    <div>
                        <p className='font-dm font-bold text-base text-primary uppercase'>Size :</p>
                    </div>
                    <select className='px-4 py-2 text-secondary border border-secondary'>
                        <option className='font-dm font-medium text-base text-secondary'>S</option>
                        <option className='font-dm font-medium text-base text-secondary'>Small</option>
                        <option className='font-dm font-medium text-base text-secondary'>Medium</option>
                        <option className='font-dm font-medium text-base text-secondary'>Large</option>
                        <option className='font-dm font-medium text-base text-secondary'>Extra Large</option>
                        <option className='font-dm font-medium text-base text-secondary'>Extra Extra Extra Large</option>
                    </select>
                </Flex>

                <Flex className="gap-x-4 items-center my-8 relative after:absolute after:h-[1px] after:w-[780px] after:bg-[#D8D8D8] after:bottom-[-17px] after:left-0">
                    <div>
                        <p className='font-dm font-bold text-base text-primary uppercase'>QUANTITY :</p>
                    </div>
                    <div className='px-8 py-2 w-[170px] border border-secondary flex justify-between'>
                        <button className='font-dm font-bold text-primary text-base'>-</button>
                         <p className='font-dm font-bold text-primary text-base'>1</p>
                        <button className='font-dm font-bold text-primary text-base'>+</button>
                    </div>
                    
                </Flex>

                <Flex className="gap-x-10 items-center">

                    <p className='font-dm font-bold text-base text-primary uppercase'>STATUS :</p>
                    <p className='font-dm font-bold text-base text-secondary uppercase'>In stock</p>
                     
                </Flex>

                <Flex className="gap-x-5 my-8 relative after:absolute after:h-[1px] after:w-[780px] after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0">
                    <Button text="Add to Wish List"/>
                    <Button text="Add to Cart" hover/>
                </Flex>
                
                <div onClick={()=>{setOpenTwo(!openTwo)}} className="flex items-center justify-between w-[780px] my-10">
                  <h2 className='font-dm font-bold text-base text-primary uppercase relative after:absolute after:h-[1px] after:w-[780px] after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>FEATURES  & DETAILS</h2>
                    {
                        openTwo ? 
                        <GrFormSubtract size={22} className='font-bold text-primary font-dm cursor-pointer'/>
                        :
                        <BiPlus size={22} className='font-bold text-primary font-dm cursor-pointer'/>
                    }
                 
                </div>
                
                {
                 openTwo &&
                 <p className='font-dm font-normal text-base text-secondary w-[780px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                }



                <div onClick={()=>{setOpen(!open)}} className="flex items-center justify-between w-[780px] my-10">
                  <h2 className='font-dm font-bold text-base text-primary uppercase relative after:absolute after:h-[1px] after:w-[780px] after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>SHIPPING & RETURNS</h2>
                    {
                        open ? 
                        <GrFormSubtract size={22} className='font-bold text-primary font-dm cursor-pointer'/>
                        :
                        <BiPlus size={22} className='font-bold text-primary font-dm cursor-pointer'/>
                    }
                
                </div>
                {
                    open &&
                 <p className='font-dm font-normal text-base text-secondary w-[780px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                }

                <Flex className="gap-x-10 items-center mt-32 mb-12">
                    <p className='font-dm font-semibold text-base text-secondary '>Description</p>
                    <p className='font-dm font-bold text-lg text-primary '>Reviews (1)</p>
                    
                </Flex>
                    <p className='font-dm my-8 font-normal text-sm text-secondary  relative after:absolute after:h-[1px] after:w-[780px] after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>1 review for Product</p>
                  

                    <Flex className="justify-between w-full items-center mt-10">
                        <Flex className="gap-x-5">
                            <p className='font-dm font-normal text-lg text-primary'>John Ford</p>
                            <Flex className='gap-x-1 text-[#FFD881] items-center'>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </Flex>
                        </Flex>
                        <p className='font-dm  font-normal text-base text-secondary'>6 months ago</p>
                
                   </Flex>
                          

                    <p className='font-dm mt-4 font-normal text-base text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                    <p className='font-dm font-bold text-base text-primary my-12'>Add a Review</p>

                  <div className='w-1/2'>
                    <Input text="Name" placeholder="Your name here"/>
                  </div>

                  <div className='w-1/2 my-5'>
                    <Input text="Email" placeholder="Your email here"/>
                  </div>

                  <div className='w-1/2 mb-5'>
                    <Input text="Review" placeholder="Your review here"/>
                  </div>

                  <Button text="Post" className="px-28" hover/>


                
          </Container>
       </Section>
    </>
  )
}

export default ProductDetails