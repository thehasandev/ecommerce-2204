import React from 'react'

import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import CardOne from "../assets/card.png"

import {AiOutlineRight} from "react-icons/ai"
import { useSelector } from 'react-redux'

import Button from '../components/Button'
import PortionHeading from '../components/PortionHeading'

function Card() {
    let pageName = useSelector((state)=>state.bractcumb.previusName)
    let cardData =useSelector((state)=>state.card)
   
    
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
           
        <ul className='bg-ash flex px-8 py-4 my-5 gap-x-[240px]'>
                <li className='font-dm font-bold text-base text-primary'>Product</li>
                <li className='font-dm font-bold text-base text-primary'>Name</li>
                <li className='font-dm font-bold text-base pl-10 text-primary'>Price</li>
                <li className='font-dm font-bold text-base text-primary'>Quantity</li>
                <li className='font-dm font-bold  text-base text-primary'>Total</li> 
        </ul>

        {
          cardData.card.map((item,index)=>(
            <div className='flex items-center gap-x-[250px]  py-4 my-5'>
            
                <div className="w-16">
                    <img src={item.imgUrl} alt="img1" />
                </div>

                <p className='font-dm w-32 font-bold  text-base text-primary'>{item.title}</p>
                <p className='font-dm w-12 font-bold  text-base text-primary'>{item.price}</p>
                <p className='font-dm w-8 font-bold text-base text-primary'>{item.quantity}</p>
                <p className='font-dm w-24 font-bold text-base text-primary'>{`1000`}</p>
            
            </div>
          )
            
          )
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
                            <th className='border border-gray/50 font-dm font-normal text-base text-gray py-4 px-32'>Total</th>  
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='border border-gray/50 font-dm font-bold text-base text-primary py-4 px-32'>389.99 $</td>
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