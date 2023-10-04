import React from 'react'
import Image from '../components/Image'

import Badge from '../components/Badge'
import Flex from '../components/Flex'
import PortionHeading from '../components/PortionHeading'
import { AiFillHeart } from 'react-icons/ai';
import IconCompare from '../components/Icon/IconCompare'
import IconAddCard from '../components/Icon/IconAddCard'




function Product({src,productName,price}) {
let handleSubmit =()=>{
  console.log("click");
}





  return (
    <div className='mx-5'>
    <div className='relative group overflow-hidden '>
        <Image src={src} className="w-full"/>
        <Badge text="New"/>

        <div className='bg-white p-8 absolute -bottom-44 w-full group-hover:bottom-0 duration-500'>
            <Flex className="justify-end items-center gap-x-4 ">
              <p className='text-sm font-dm font-bold text-gray'>Add to Wish List</p> <AiFillHeart className='text-primary'/>
            </Flex>

            <Flex className="justify-end items-center gap-x-4 my-5">
              <p className='text-sm font-dm font-bold text-gray'>Compare</p> 
              <IconCompare/> 
            </Flex>

            <div onClick={handleSubmit} className="flex justify-end items-center gap-x-4 cursor-pointer">    
              <p className='text-sm font-dm font-bold text-primary'>Add to Cart</p>
              <IconAddCard />
            </div>
        </div>
       
    </div>

    <Flex className="justify-between items-center mt-4">
           <PortionHeading text={productName}/>
           <p className='font-dm font-normal text-base text-gray'>{`$ ${price}`}</p>
    </Flex>

    </div>
  )
}

export default Product