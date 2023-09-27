import React from 'react'

import {Link} from "react-router-dom"

import {AiOutlineRight} from "react-icons/ai"
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'

import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Checkout() {
    let pageName =useSelector((state)=>state.bractcumb.previusName)


    let [countryName,setCountryName] = useState([])

    useEffect(()=>{
        let f1 = async ()=>{
            let datas = await axios("https://restcountries.com/v3.1/all")
            setCountryName(datas.data)
         }
         f1()
    },[])
    



  return (
    <>
     <Container>
     <SubHeading text="Checkout" className="mb-2"/>
            <Flex className="items-center gap-x-2">
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase flex items-center gap-x-2'>
      
                <Link to={pageName=="Home" ? "/"  : `/${pageName}`}>
                  {pageName}
                </Link>
                
                <AiOutlineRight/>
              </p>
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ")}</p>
            
            </Flex>
            <p className='mt-32 font-dm font-normal text-gray'>Have a coupon? <span className='text-primary'>Click here to enter your code</span></p>

            <SubHeading text="Billing Details" className="text-text39 mb-10 mt-28 "/>
             
             <Flex className="justify-between flex-wrap gap-y-6  pb-32">
                  <div className='w-48'>
                    <Input text="First Name *" placeholder="First Name" type="text"/>
                  </div>

                  <div className='w-48'>
                    <Input text="Last Name *" placeholder="Last Name" type="text"/>
                  </div>

                  <div className='w-full'>
                    <Input text="Companye Name (optional)" placeholder="Company Name" type="text"/>
                  </div>

                  <div className='w-full'>
                    <h4 className='font-dm font-bold text-base pb-3 '>Country *</h4>
                    <select className='w-full border-b border-solid text-secondary border-offwhite py-5 px-5  '>
                        <option className='text-sm font-dm'>Country Select</option>
                        {
                            countryName.map((item,index)=>(
                                <option key={index}>{item.name.common}</option>
                            ))
                        }
                    </select>
                  </div>

                  <div className='w-full'>
                    <Input text="Street Address *" placeholder="House number and street name" type="text"/>
                    <input className='w-full border-b border-solid border-offwhite py-5 px-5 mb-2  placeholder:text-sm placeholder:font-dm' placeholder='Apartment, suite, unit etc. (optional)'/>
                  </div>

                  <div className='w-full'>
                    <Input text="Town/City *" placeholder="Town/City" type="text"/>
                  </div>

                  <div className='w-full'>
                    <Input text="Country Optinal" placeholder="Country" type="text"/>
                  </div>

                  <div className='w-full'>
                    <Input text="Post Code *" placeholder="Post Code" type="text"/>
                  </div>

                  <div className='w-full'>
                    <Input text="Phone *" placeholder="Phone" type="number"/>
                  </div>

                  <div className='w-full'>
                    <Input text="Email Address*" placeholder="Email" type="text"/>
                  </div>
                
             </Flex>

             <SubHeading text="Additional Information" className="text-text39 "/>
             <div className='w-full mb-2.5 mt-10'>
                    <Input text="Other Notes (optional)" placeholder="Notes about your order, e.g. special notes for delivery." type="text"/>
             </div>

             <SubHeading text="Your Order" className="text-text39 mt-32 mb-12"/>
            
             <table>
                <thead>
                    <tr>
                        <th className='border border-gray font-dm font-bold text-base text-primary py-4 px-32'>Product</th>
                        <th className='border border-gray font-dm font-normal text-base text-gray py-4 px-32'>Total</th>  
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='border border-gray font-dm font-bold text-base text-primary py-4 px-32'>Product name x 1</td>
                        <td className='border border-gray font-dm font-normal text-base text-gray py-4 px-32'>389.99 $</td>  
                    </tr>

                   <tr>
                    <td className='border border-gray font-dm font-bold text-base text-primary py-4 px-32'>Subtotal</td>
                    <td className='border border-gray font-dm font-normal text-base text-gray py-4 px-32'>389.99 $</td>
                  </tr>

                   <tr>
                        <td className='border border-gray font-dm font-bold text-base text-primary py-4 px-32'>Total</td>
                        <td className='border border-gray font-dm font-normal text-base text-gray py-4 px-32'>389.99 $</td>  
                   </tr>
                </tbody>
        
             </table>
     </Container>
    </>
  )
}

export default Checkout