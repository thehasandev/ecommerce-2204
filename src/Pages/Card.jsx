import React, { useEffect, useState } from 'react'

import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

import {AiOutlineCloseSquare} from "react-icons/ai"
import {AiOutlineRight} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,removeCart } from '../slices/cardSlice'

import Button from '../components/Button'
import PortionHeading from '../components/PortionHeading'
import Section from '../components/Section'

function Card() {
    const pageName = useSelector((state)=>state.bractcumb.previusName) 
    const cartData = useSelector((state)=>state.cart.cartItem)
    const dispatch =useDispatch()
    const [totall,setTotall] =useState("")

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

  return (
    <Section className="mt-124">
      <Container>
          <SubHeading text="Card"/>

          <Flex className="items-center gap-x-2 mb-16">
                <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase flex items-center gap-x-2'>
        
                  <Link to={pageName=="Home" ? "/"  : pageName == "Sing up"? "/sing-up" : `/${pageName}`}>
                    {pageName}
                  </Link>
                  
                  <AiOutlineRight/>
                </p>
                <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ")}</p>
              
          </Flex>
            
          <ul className='bg-ash flex justify-between p-4'>
                  <li className='font-dm font-bold text-base text-primary'>Action</li>
                  <li className='font-dm font-bold text-base text-primary'>Product</li>
                  <li className='font-dm font-bold text-base text-primary'>Name</li>
                  <li className='font-dm font-bold text-base pl-10 text-primary'>Price</li>
                  <li className='font-dm font-bold text-base text-primary'>Quantity</li>
                  <li className='font-dm font-bold  text-base text-primary'>Sub Total</li> 
          </ul>

  {
    cartData.map((item,index)=>{
      const {imgUrl,productName,price,quantity} = item

      return<ul key={index} className='bg-ash flex items-center  p-4 border-b border-gray'>
                  <li className='w-[280px] font-dm font-bold text-base text-primary cursor-pointer' onClick={()=>{handleRemove(item)}} >
                  <AiOutlineCloseSquare size={30} className='text-primary '/>
                  </li>
                  <li className='  font-dm font-bold text-base text-primary'><img src={imgUrl} alt="img1" className='w-16'/></li>
                  <li className='w-[550px] text-center  font-dm font-bold text-base text-primary'>{productName}</li>
                  <li className='w-[200px] pl-8  font-dm font-bold text-base  text-primary'>{price}</li>
                  <li className=' flex  items-center px-1 justify-center gap-5 font-dm border border-primary border-solid ml-24 font-bold text-base text-primary'>
                      <button onClick={()=>{handleDecrement(item)}} className='text-lg text-primary'>-</button>
                                {quantity}
                      <button onClick={()=>{handleIncrement(item)}} className='text-lg  text-primary'>+</button>
                  </li>
                  <li className='w-[300px] text-right   font-dm font-bold  text-base text-primary'>{price*quantity}</li> 
          </ul>
    })
  }

      
          
            
          

        
            <select className='w-32 border mt-8 border-gray/50'>
              <option className='font-dm font-bold text-base text-primary'>Size</option>
              <option className='font-dm font-bold text-base text-primary'>29</option>
              <option className='font-dm font-bold text-base text-primary'>30</option>
              <option className='font-dm font-bold text-base text-primary'>31</option>
            </select>

          <section>
            <PortionHeading text="Cart totals" className="text-right mt-5"/>
            <Flex className="justify-end mt-10">
              <table>
                      <thead>
                          <tr>
                              <th className='border border-gray/50  font-dm font-bold text-base text-primary py-4 px-32'>Subtotal</th>
                              <th className='border border-gray/50 font-dm font-normal text-base text-gray py-4 px-32'>{totall}</th>  
                          </tr>
                      </thead>

                      <tbody>
                          <tr>
                              <td className='border border-gray/50 font-dm font-bold text-base text-primary py-4 px-32'>Total</td>
                              <td className='border border-gray/50 font-dm font-bold text-base text-primary py-4 px-32'>{totall}</td>  
                          </tr>
                      </tbody>
                      
              </table>
            </Flex> 

            <Flex className="justify-end mt-5">
                <Link to="/checkout">
                  <Button text="Proceed to Checkout" hover/>
                </Link>
            </Flex>
          </section> 
        
      </Container>
    </Section>
  )
}

export default Card