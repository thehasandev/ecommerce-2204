import React from 'react'

import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import OneImage from "../assets/product1.png"

import {AiOutlineRight} from "react-icons/ai"
import { useSelector } from 'react-redux'

import Button from '../components/Button'
import PortionHeading from '../components/PortionHeading'

function Card() {
    let pageName = useSelector((state)=>state.bractcumb.previusName)
    
   
    
  return (
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

        <ul className='bg-ash flex items-center justify-center p-4 border-b border-gray'>
                <li className='w-[380px]  font-dm font-bold text-base text-primary'>Action</li>
                <li className='w-20   font-dm font-bold text-base text-primary'><img src={OneImage} alt="img1" className='w-16'/></li>
                <li className='w-[500px]  text-center pl-36  font-dm font-bold text-base text-primary'>Produt One</li>
                <li className='w-[500px]  text-center pl-[65px]  font-dm font-bold text-base  text-primary'>100</li>
                <li className='w-32 flex  items-center justify-center gap-5 font-dm border border-primary border-solid ml-24 font-bold text-base text-primary'>
                    <button className='text-lg text-primary'>-</button>
                               5
                    <button className='text-lg  text-primary'>+</button>
                </li>
                <li className='w-96 text-right  font-dm font-bold  text-base text-primary'>1000</li> 
        </ul>

    
         
          
        

       
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
                            <th className='border border-gray/50 font-dm font-normal text-base text-gray py-4 px-32'>654654</th>  
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='border border-gray/50 font-dm font-bold text-base text-primary py-4 px-32'>Total</td>
                            <td className='border border-gray/50 font-dm font-normal text-base text-gray py-4 px-32'>389.99 $</td>  
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
  )
}

export default Card