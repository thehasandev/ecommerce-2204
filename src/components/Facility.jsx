import React from 'react'
import Flex from './Flex'
import { AiFillCar } from "react-icons/ai";
import IconRetun from './Icon/IconRetun';


function Facility() {
  return (
    <>
    <Flex className="justify-between">
        
    <Flex className="gap-x-4 items-center">
        <span className='font-dm font-medium text-3xl text-primary'>2</span>
        <p className='font-dm font-normal text-base text-secondary'>Return</p>
    </Flex>

    <Flex className="gap-x-4 items-center">
        <AiFillCar/>
        <p className='font-dm font-normal text-base text-secondary'>Free shipping</p>
    </Flex>

    <Flex className="gap-x-4 items-center">
        <IconRetun/>
        <p className='font-dm font-normal text-base text-secondary'>Return</p>
    </Flex>

    </Flex>
    </>
  )
}

export default Facility