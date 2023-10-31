import React, { useEffect, useRef, useState } from 'react'

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
import PortionHeading from '../PortionHeading'
import { useDispatch, useSelector } from 'react-redux'
import { bradcrumb } from '../../slices/bratcrumbSlice'
import  { increment,decrement,removeCart } from '../../slices/cardSlice'
import { upDown } from '../../slices/openDownSlice'




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

    <Section className="bg-ash py-6 ">
        <Container>
            <Flex className="justify-between items-center">
                <Flex className='w-1/5 gap-x-2.5 items-center relative'>
                  <div ref={menutRef}>
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
                    <p className='font-dm font-normal text-sm text-primary'>Shop by Category</p>
                </Flex>
                <div className='w-3/5'>
                  <Search placeholder="Search Products"/>  
                </div>

                <Flex className='w-1/5 gap-x-10 justify-end'>
                    <Flex className="relative">
                      <Link to="/sing-up" onClick={()=>{handleNameClick("Sing up")}}>
                         <BiSolidUser/>
                      </Link>
                    <div ref={accountRef}>
                        <AiFillCaretDown className='cursor-pointer' onClick={()=>{setAccount(!account)}}/>
                        {
                        account &&
                        <ul className='absolute top-10 left-[-180px] z-10 w-96 '>
                          <button className='px-16 py-4 bg-primary font-dm font-bold text-sm text-white w-[220px] mb-2'>My Account</button>
                          <button className='px-16 py-4 bg-trnasparent font-dm font-bold text-sm text-primary hover:bg-primary duration-300 hover:text-white w-[220px]'>Log Out</button>
                        </ul> 
                        }
                    </div>
                </Flex>
                      
                       
                       <div className='relative'>
                        <BsCartFill onClick={()=>{handleOpen(true)}} className='cursor-pointer'/>
                        
                        <div className='absolute top-[-13px] left-[15px]   text-xl font-dm font-bold text-primary '>
                          {cartData.length}
                        </div>
                       </div>

                {/* Add to cart Sidebar */}
             
                 <div className={`w-2/6 h-screen  bg-[#e3e3e3] duration-500 absolute top-0 z-10 ${openCart ? "right-0":"right-[-50%] duration-700"}`}>
                      <Flex className="justify-end pr-4 pt-4">
                        <GrFormClose size={40} onClick={()=>{handleOpen(false)}}/>
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
                     {
                      cartData.length>0 ? 
              <>
                    {
                     cartData.map((item,index)=>{
                       const {imgUrl,productName,price,quantity} = item
               return  <ul key={index}  className=' flex items-center  mt-5 bg-[#454449] py-2'>   
                             <li className='w-32 pl-5 cursor-pointer' onClick={()=>{handleRemove(item)}}  >
                               <AiOutlineCloseSquare size={30} className='text-white '/>
                             </li>
                             
                             <li className='w-16 mr-1 '>
                               <img src={imgUrl} alt="" className='w-full'/>
                             </li>

                             <li className='w-[180px] px-4  font-dm font-medium text-xs text-center text-white'>
                               {productName}
                              
                             </li>

                             <li className='w-[100px]  font-dm font-medium text-base  text-white'>
                             {price}
                             </li>

                             <li className='  font-dm  font-bold text-base text-white border border-white flex justify-center gap-x-3 px-1 items-center '>
                               <button  onClick={()=>{handleDecrement(item)}} className='text-xl text-white'>-</button>
                                {quantity}
                               <button onClick={()=>{handleIncrement(item)}}  className='text-xl text-white'>+</button>
                             </li>

                             <li className='w-32  text-right pr-5 font-dm font-medium text-base text-white'>
                               {price*quantity}
                             </li>
                       </ul>
                       
                     })
                    } 
                         <p className='font-dm font-medium text-xl pr-5 mt-12 text-right text-primary'>Tottal : {totall}</p>

                         <Flex className="justify-center mt-5 gap-x-5 ">
                              <div className='w-6/12' onClick={()=>handleOpen(false)}>
                                <Link to="/checkout">
                                  <Button text="CHECK OUT NOW" hover className="w-full rounded-[5px] bg-[#454449] border-[#454449]"/>
                                </Link>
                              </div>
                   
                            <div className='w-5/12' onClick={()=>handleOpen(false)}>
                              <Link to="card">
                                  <Button text="VIEW CART"   className="w-full rounded-[5px] "/>
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