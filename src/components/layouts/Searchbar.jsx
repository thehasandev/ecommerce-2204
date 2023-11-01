import React, { useEffect, useRef, useState } from 'react'

import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import DropMenu from '../Icon/DropMenu'
import Button from "../Button"
import Logo from "../../assets/logo.png"


import {BiSolidUser} from "react-icons/bi"
import {AiFillCaretDown,AiOutlineCloseSquare} from "react-icons/ai"
import {GrFormClose} from "react-icons/gr"
import {BsCartFill} from "react-icons/bs"
import Search from '../Search'
import { Link } from 'react-router-dom'
import PortionHeading from '../PortionHeading'
import { useDispatch, useSelector } from 'react-redux'
import { bradcrumb } from '../../slices/bratcrumbSlice'
import  { increment,decrement,removeCart } from '../../slices/cardSlice'
import { upDown } from '../../slices/openDownSlice'
import Image from '../Image'




function Searchbar() {
  const openCart= useSelector((state)=>state.trueFalse.openitem)
  const [account,setAccount]=useState(false)
  const [menu,setMenu]=useState(false)

  const [totall,setTotall] =useState("")

  const dispatch = useDispatch()

  const cartData = useSelector((state)=>state.cart.cartItem)
  


  
  const handleNameClick =(name)=>{
    dispatch(bradcrumb(name))
  }
  const handleIncrement =(item)=>{
    dispatch(increment(item))
  }
  const handleDecrement =(item)=>{
    dispatch(decrement(item))
  }
  const handleRemove =(item)=>{
    dispatch(removeCart(item))
  }


  
  useEffect(() => {
    let  total = 0
    cartData.map((item)=>{
      total+= item.price*item.quantity
    })
    setTotall(total)
    
  },[cartData])
  
  const handleOpen =(down)=>{
    dispatch(upDown(down))
 }

 const accountRef = useRef(null)
 const menutRef = useRef(null)

 useEffect(()=>{
  let handler =(e)=>{
    if(!accountRef.current.contains(e.target)){
      setAccount(false)
    }
  }
  
  document.addEventListener("mousedown",handler)
  return () =>{
    document.removeEventListener("mousedown",handler)
  }
 })
 
 useEffect(()=>{
  let handler =(e)=>{
   if(!menutRef.current.contains(e.target)){
     setMenu(false)
    }
  }
  document.addEventListener("mousedown",handler)
  return ()=>{
    document.removeEventListener("mousedown",handler)
  }
 })

  

  return (

    <Section className="bg-ash py-4 md:py-6">
        <Container>
            <Flex className="md:justify-between justify-center gap-x-2  items-center px-4 xl:px-0">
                <Flex className='md:w-1/5 md:gap-x-2.5 gap-x-3 items-center relative'>
                  <Image src={Logo} className="block lg:hidden"/>
                    <div className='hidden md:block' ref={menutRef}>
                        <div onClick={()=>{setMenu(!menu)}} className='cursor-pointer'>
                          <DropMenu/>
                        </div>
                        {
                          menu &&
                          <ul className='w-[250px] bg-primary absolute top-8 left-0 z-10'>
                            <li className='px-8 pb-3 pt-5 font-dm font-normal text-offwhite/40 hover:text-white duration-200 cursor-pointer border-b border-solid border-offwhite/20 '>Accesories</li>
                            <li className='px-8 py-3 font-dm font-normal text-offwhite/40 hover:text-white duration-200 cursor-pointer border-b border-solid border-offwhite/20 '>Furniture</li>
                            <li className='px-8 py-3 font-dm font-normal text-offwhite/40 hover:text-white duration-200 cursor-pointer border-b border-solid border-offwhite/20 '>Electronics</li>
                            <li className='px-8 py-3 font-dm font-normal text-offwhite/40 hover:text-white duration-200 cursor-pointer border-b border-solid border-offwhite/20 '>Clothes</li>
                            <li className='px-8 py-3 font-dm font-normal text-offwhite/40 hover:text-white duration-200 cursor-pointer border-b border-solid border-offwhite/20 '>Bags</li>
                            <li className='px-8 pt-3 pb-5 font-dm font-normal text-offwhite/40 hover:text-white duration-200 cursor-pointer border-b border-solid border-offwhite/20 '>Home appliances</li>
                          </ul>

                        }

                    </div>
                    <p className=' hidden lg:block font-dm font-normal text-xs md:text-sm text-primary'>Shop by Category</p>
                </Flex>

                <div className='md:w-3/5 w-[250px]'>
                  <Search placeholder="Search Products"/>  
                </div>

                <Flex className='md:w-1/5 md:gap-x-10 gap-x-2 justify-end'>
                    <Flex className="relative">
                      <Link to="/sing-up" onClick={()=>{handleNameClick("Sing up")}}>
                         <BiSolidUser className='text-sm md:text-lg'/>
                      </Link>
                    <div ref={accountRef}>
                        <AiFillCaretDown className='cursor-pointer text-xs md:text-base' onClick={()=>{setAccount(!account)}}/>
                        {
                        account &&
                        <ul className='absolute top-10 left-[-100px] md:left-[-180px] z-10 w-96'>
                          <Flex className="flex-col">
                            <button className='md:px-16 md:py-4 bg-primary font-dm font-bold text-sm text-white md:w-[220px] mb-2 px-2 py-2 w-[130px]'>My Account</button>
                            <button className='md:px-16 md:py-4 bg-trnasparent font-dm font-bold text-sm text-primary hover:bg-primary px-2 py-2 duration-300 w-[130px] hover:text-white md:w-[220px] '>Log Out</button>
                          </Flex>
                        </ul> 
                        }
                    </div>
                </Flex>
                      
                       
                       <div className='relative flex items-center gap-x-8'>
                        <BsCartFill onClick={()=>{handleOpen(true)}} className='cursor-pointer text-sm md:text-lg'/>
                        <div className='block md:hidden '>
                          <DropMenu/>
                        </div>
                        <div className='absolute md:top-[-13px] top-[-10px] left-[13px] md:left-[15px]  text-sm md:text-xl font-dm font-bold text-primary '>
                          {cartData.length}
                        </div>
                       </div>

                {/* Add to cart Sidebar */}
             
                 <div className={`lg:w-2/6 h-screen  bg-[#e3e3e3] duration-100 absolute top-0 z-40 right-0 origin-right ${openCart ? "rotate-x-0 ":"rotate-x-90  "}`}>
                      <Flex className="justify-end pr-4 pt-4">
                        <GrFormClose size={40} onClick={()=>{handleOpen(false)}}/>
                      </Flex>
                      <PortionHeading text="SHOPPING CART" className="hidden lg:block border-b border-solid px-2 border-primary pb-5"/>
                        
                        <ul className='flex justify-between mt-5 px-2 '>
                           <li className='font-dm font-normal  lg:font-bold text-sm lg:text-base text-primary'>Action</li>
                           <li className='font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary'>Product</li>
                           <li className='font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary'>Name</li>
                           <li className='font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary'>Price</li>
                           <li className='font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary'>Quantity</li>
                           <li className='font-dm  font-normal lg:font-bold text-sm lg:text-base text-primary'>Subtotal</li>
                        </ul>
                     {
                      cartData.length>0 ? 
              <>
                    {
                     cartData.map((item,index)=>{
                       const {imgUrl,productName,price,quantity} = item
               return  <ul key={index}  className='flex justify-between items-center  mt-5 bg-[#454449] py-2'>   
                             <li className='lg:w-32 w-16 pl-5 cursor-pointer' onClick={()=>{handleRemove(item)}}  >
                               <AiOutlineCloseSquare  className='text-white lg:text-xl text-sm'/>
                             </li>
                             
                             <li className='lg:w-16 w-8 mr-1 '>
                               <img src={imgUrl} alt="" className='w-full'/>
                             </li>

                             <li className='lg:w-[180px] px-4  font-dm font-medium text-xs text-center text-white'>
                               {productName}
                              
                             </li>

                             <li className='lg:w-[100px]  font-dm font-medium text-base  text-white'>
                             {price}
                             </li>

                             <li className='font-dm  font-bold text-base mx-4 lg:mx-0 text-white border border-white flex justify-center gap-x-3 px-1 items-center '>
                               <button  onClick={()=>{handleDecrement(item)}} className='text-xl  text-white'>-</button>
                                {quantity}
                               <button onClick={()=>{handleIncrement(item)}}  className='text-xl text-white'>+</button>
                             </li>

                             <li className='lg:w-32  text-right pr-5 font-dm font-medium text-base text-white'>
                               {price*quantity}
                             </li>
                       </ul>
                       
                     })
                    } 
                         <p className='font-dm font-medium text-xl pr-5 mt-12 text-right text-primary'>Tottal : {totall}</p>

                         <Flex className="justify-center mt-5 lg:gap-x-5 gap-x-2">
                              <div className='lg:w-6/12' onClick={()=>handleOpen(false)}>
                                <Link to="/checkout">
                                <button className='lg:px-14 px-4 py-2 lg:w-full rounded-[5px] duration-500  text-sm font-bold font-dm  border border-primary hover:bg-white hover:text-primary text-white bg-primary'>CHECK OUT NOW</button>
                                </Link>
                              </div>
                   
                            <div className='lg:w-5/12' onClick={()=>handleOpen(false)}>
                              <Link to="card">
                                <button className='lg:px-14 px-4 py-2 lg:w-full rounded-[5px] duration-500  text-sm font-bold font-dm  border border-primary hover:bg-white hover:text-primary text-white bg-primary'>VIEW CART</button>
                              </Link>   
                            </div>

                         </Flex>
                      
                </>
                      :
                      <h1 className='absolute top-1/2 left-1/2 font-dm -translate-x-1/2 text-primary text-3xl font-bold'>Card is empty</h1>
                     }  



                  </div>
                   
                 
                </Flex>
            </Flex>
        </Container>
    </Section>
  )
}

export default Searchbar