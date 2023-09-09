import React, { useState } from 'react'

import data from "../data/divition"
import Container from '../components/Container'
import SubHeading from "../components/SubHeading"
import Flex from '../components/Flex'
import Input from '../components/Input'
import Button from "../components/Button"

import {AiOutlineRight} from "react-icons/ai"

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Singup() {
  let pageName =useSelector((state)=>state.bractcumb.previusName)
  
let [divitonData,setDivitionData] = useState("")



let handleDivitionChange=(e)=>{
  if(e.target.value !="Please select"){
    setDivitionData(e.target.value)
  }
}

  return (
    <div>
       <Container>
           <SubHeading text="Sing up" className="mb-2"/>
            <Flex className="items-center gap-x-2">
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase flex items-center gap-x-2'>
      
                <Link to={pageName=="Home" ? "/"  : `/${pageName}`}>
                  {pageName}
                </Link>
                
                <AiOutlineRight/>
              </p>
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ").replace("-"," ")}</p>
            
            </Flex>

            <p className='font-dm font-normal text-gray w-664 mt-127 mb-57 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        
          {/* Problem */}
          <SubHeading text="Your Personal Details" className="text-text39 mb-10 "/>
             <Flex className="justify-between flex-wrap gap-y-6 border-b  border-offwhite pb-10">
                  <div className='w-48'>
                    <Input text="First Name" placeholder="First Name" type="text"/>
                  </div>

                  <div className='w-48'>
                    <Input text="Last Name" placeholder="Last Name" type="text"/>
                  </div>

                  <div className='w-48'>
                    <Input text="Email address" placeholder="company@domain.com" type="text"/>
                  </div>

                  <div className='w-48'>
                    <Input text="Telephone" placeholder="Your phone number" type="text"/>
                  </div>
             </Flex>
             
             <SubHeading text="New Customer" className="text-text39 mb-10 mt-6"/>
             <Flex className="justify-between flex-wrap gap-y-6  border-b  border-offwhite pb-10">
                  <div className='w-48'>
                    <Input text="Address 1" placeholder="First Name" type="text"/>
                  </div>

                  <div className='w-48'>
                    <Input text="Address 2" placeholder="-" type="text"/>
                  </div>

                  <div className='w-48'>
                    <Input text="City" placeholder="Your City" type="text"/>
                  </div>

                  <div className='w-48'>
                    <Input text="Post Code" placeholder="05228" type="text"/>
                  </div>

                  <div className='w-48'>
                  <h4 className='font-dm font-bold text-base pb-3'>Diviton</h4>
                    <select className='w-full py-5 px-5 border-b border-solid border-offwhite text-sm font-dm text-gray' onChange={handleDivitionChange} value={divitonData}>
                      <option>Please select</option>
                      {
                        data.map((item,index)=>(<option key={index}>{item.divition}</option>))
                      }
                    </select>
                  </div>
                   
                  <div className='w-48'>
                  <h4 className='font-dm font-bold text-base pb-3'>District</h4>
                    <select className='w-full py-5 px-5 border-b border-solid border-offwhite text-sm font-dm text-gray' >
                      <option>Please select</option>
                    {
                      data.map((item,index)=>(
                       item.divition == divitonData &&
                        item.district.map((item2,index)=>(
                           <option key={index}>{item2.name}</option>
                        ))
                      ))
                    }
                    </select>
                  </div>
                
             </Flex>
            
            <SubHeading text="Your Password" className="text-text39 mb-10 mt-6"/>
             <Flex className="justify-between flex-wrap gap-y-6">

                <div className='w-48'>
                  <Input text="New Password" placeholder="New Password" type="password"/>
                </div>  
                
                <div className='w-48'>
                  <Input text="Confirm Password" placeholder="Confirm Password" type="password"/>
                </div>    

             </Flex>

            <div className='mt-5'>
             <input id="box"  className="peer/box hidden " type="checkbox"/>
              <label className='pt-0.5 font-dm font-normal text-sm text-gray relative pl-10 after:absolute after:h-3 after:w-3 after:top-[4px] after:contents-[""] after:left-0  after:peer-checked/box:bg-gray before:absolute before:h-5 before:w-5 before:border-solid before:border-gray before:top-0 before:border before:left-[-4px]' htmlFor="box">
              I have read and agree to the Privacy Policy
              </label>
            </div>

            <Flex className="mt-6">
              <div  className='w-1/5'>
                <p className='font-dm font-normal text-sm text-gray'>Subscribe Newsletter</p>
              </div>
              <div className='w-1/5'>

              
                <input id="boxTwo"  className="peer/boxTwo hidden " type="checkbox"/>
                  <label className='pt-0.5 pr-10 font-dm font-normal text-sm text-gray relative pl-10 after:absolute after:h-3 after:w-3 after:top-[4px] after:contents-[""] after:left-0  after:peer-checked/boxTwo:bg-gray before:absolute before:h-5 before:w-5 before:border-solid before:border-gray before:top-0 before:border before:left-[-4px] ' htmlFor="boxTwo">
                  Yes
                 </label>
          

            
                <input id="boxThree"  className="peer/boxThree hidden " type="checkbox"/>
                  <label className='pt-0.5 font-dm font-normal text-sm text-gray relative pl-10 after:absolute after:h-3 after:w-3 after:top-[4px] after:contents-[""] after:left-0  after:peer-checked/boxThree:bg-gray before:absolute before:h-5 before:w-5 before:border-solid before:border-gray before:top-0 before:border before:left-[-4px] ' htmlFor="boxThree" >
                  no
                 </label>

             

              </div>
              
            </Flex>
           
           <Link to="/login">
              <Button text="Login" className="px-28 mt-10" hover/>
           </Link>


       </Container>
    </div>
  )
}

export default Singup