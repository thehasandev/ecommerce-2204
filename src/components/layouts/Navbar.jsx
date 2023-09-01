import React from 'react'

import Container from '../Container'
import Flex from '../Flex'
import Image from "../Image"
import List from "../List"
import Searchbar from "../layouts/Searchbar"

import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='py-8'>
        <Container>
             <Flex>

                 <div className='w-1/5'>
                    <Image src={Logo}/>
                 </div>
                 
                 <Flex className='w-4/5 justify-end'>
                    <ul className='flex gap-x-10'>
                      <Link to="/">
                        <List text="Home"/>
                      </Link>
                        <List text="Shop"/>
                        <List text="About"/>
                        <List text="Contacts"/>
                        <List text="Journal"/>
                    </ul>
                 </Flex>
             </Flex>
        </Container>
    </nav>
    <Searchbar/>
    </>
  )
}

export default Navbar