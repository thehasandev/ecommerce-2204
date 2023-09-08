import React from 'react'

import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import DropMenu from '../Icon/DropMenu'

import {BiSolidUser} from "react-icons/bi"
import {AiFillCaretDown} from "react-icons/ai"
import {BsCartFill} from "react-icons/bs"
import Search from '../Search'



function Searchbar() {
  return (
    <Section className="bg-ash py-6 mb-36">
        <Container>
            <Flex className="justify-between items-center">
                <Flex className='w-1/5 gap-x-2.5 items-center'>
                    <DropMenu/>
                    <p className='font-dm font-normal text-sm text-primary'>Shop by Category</p>
                </Flex>
                <div className='w-3/5'>
                  <Search placeholder="Search Products"/>    
                </div>

                <Flex className='w-1/5 gap-x-10 justify-end'>
                    <Flex>
                    <BiSolidUser/>
                    <AiFillCaretDown/>
                    </Flex>
                    <BsCartFill/>
                </Flex>
            </Flex>
        </Container>
    </Section>
  )
}

export default Searchbar