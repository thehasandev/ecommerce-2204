import React from 'react'

import Container from '../Container'
import Flex from '../Flex'
import PortionHeading from "../PortionHeading"
import List from '../List'
import Image from '../Image'

import Logo from "../../assets/logo.png"
import {FaFacebookF} from "react-icons/fa"
import {BiLogoLinkedin} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"


function Footer() {
  return (
    <footer className='bg-ash py-14'>
       <Container>
           <Flex>

            <div className='w-2/12'>
               <PortionHeading text="MENU" className="mb-4"/>
                  <ul className='flex flex-col gap-y-1.5'>
                      <List text="Home"/>
                      <List text="Shop"/>
                      <List text="About"/>
                      <List text="Contacts"/>
                      <List text="Journal"/>
                  </ul>
            </div>

            <div className='w-2/12'>
               <PortionHeading text="SHOP" className="mb-4"/>
                  <ul className='flex flex-col gap-y-1.5'>
                      <List text="Category 1"/>
                      <List text="Category 2"/>
                      <List text="Category 3"/>
                      <List text="Category 4"/>
                      <List text="Category 5"/>
                  </ul>
            </div>

            <div className='w-2/12'>
               <PortionHeading text="HELP" className="mb-4"/>
                  <ul className='flex flex-col gap-y-1.5'>
                      <List text="Privacy Policy"/>
                      <List text="Terms & Conditions"/>
                      <List text="Special E-shop"/>
                      <List text="Shipping"/>
                      <List text="Secure Payments"/>
                  </ul>
            </div>
            
            <div className='w-3/12'>
            <PortionHeading text="(052) 611-5711" className="mb-3"/>
            <PortionHeading text="company@domain.com"/>
            <ul>
            <List text="575 Crescent Ave. Quakertown, PA 18951"/>
            </ul>
            </div>

            <div className='w-2/12'>
                <Image src={Logo}/>
            </div>

           </Flex>

           <Flex className="justify-between pt-16">
              <Flex className="gap-x-6 text-primary w-2/5">
                  <FaFacebookF/>
                  <BiLogoLinkedin/>
                  <BsInstagram/>
              </Flex>
              <div className='4/5'>
                <p className='font-dm font-normal text-secondary text-sm'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
              </div>
           </Flex>
       </Container>
    </footer>
  )
}

export default Footer