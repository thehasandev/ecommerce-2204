import React from 'react'
import {Link} from "react-router-dom"

import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import Image from '../components/Image'
import Map from "../assets/map.png"


import {AiOutlineRight} from "react-icons/ai"
import { useSelector } from 'react-redux'
import Section from '../components/Section'

function Contacts() {
    let pageName = useSelector((state)=>state.bractcumb.previusName)
  return (
    <Section className="mb-10 lg:mt-124 px-4 lg:px-0">
      <Container>
            <SubHeading text="Contacts" className="mb-2"/>
              <Flex className="items-center gap-x-2 pt-4">
                <p className='font-dm font-normal text-xs  text-secondary first-letter:uppercase flex items-center gap-x-2'>
        
                  <Link to={pageName=="Home" ? "/"  : pageName == "Sing up"? "/sing-up" : `/${pageName}`}>
                    {pageName}
                  </Link>
                  
                  <AiOutlineRight/>
                </p>
                <p className='font-dm font-normal text-xs text-secondary first-letter:uppercase'>{window.location.pathname.replace("/"," ")}</p>
              
              </Flex>

              <SubHeading text="Fill up a Form" className=" text-2xl lg:text-text39 mb-10 mt-8 md:mt-32"/>
              <Flex className="md:justify-between justify-center flex-wrap gap-y-6 ">
                    <div className='w-4/6'>
                      <Input text="Name" placeholder="Your Name Here" type="text"/>
                    </div>
                    <div className='w-4/6'>
                      <Input text="Email" placeholder="Your Email Here" type="text"/>
                    </div>
                    <div className='w-4/6'>
                      <Input text="Message" placeholder="Your Message Here" type="text"/>
                    </div>
              </Flex>
              <Flex className="justify-center md:justify-start">
                <Button text="Post" className="md:px-28 mt-10" hover/>
              </Flex>
              <Image src={Map} className="mt-32"/>
      </Container>
    </Section>
  )
}

export default Contacts