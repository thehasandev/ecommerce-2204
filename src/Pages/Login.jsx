import React from 'react'
//Kaj baki ace Page Name conditions
import {AiOutlineRight} from "react-icons/ai"
import Container from "../components/Container"
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Input from '../components/Input'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Section from '../components/Section'

function Login() {
    let pageName = useSelector((state)=>state.bractcumb.previusName)
  
  return (
    <Section className="mt-124">
        <Container>
        <SubHeading text="Login" className="mb-2"/>
        <Flex className="items-center gap-x-2">
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase flex items-center gap-x-2'>
                 <Link to={pageName == "Home" ? "/" : pageName =="Sing up" ? "/sing-up" : `/${pageName}`}>
                    {pageName} 
                 </Link>
                <AiOutlineRight/>
              </p>
              <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ")}</p>
        </Flex>
            
        <p className='font-dm font-normal text-gray w-664 mt-127 mb-57 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        
        <SubHeading text="Returning Customer" className="text-text39 mb-11 "/>
           <Flex className="justify-between flex-wrap gap-y-6">
                <div className='w-48'>
                  <Input text="Email address" placeholder="company@domain.com" type="text"/>
                </div>

                <div className='w-48'>
                  <Input text="Password" placeholder="******" type="text"/>
                </div>
              <Button text="Login" className="px-28"/>
           </Flex>   

           <SubHeading text="New Customer" className="text-text39 mt-32 "/>
           <p className='font-dm font-normal text-gray w-664 mt-10  text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
           <Button text="Continue" className="px-28 mt-10"/>
        </Container>
    </Section>
  )
}

export default Login