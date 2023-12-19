import React, { useState } from 'react'
import Image from '../components/Image'

import Badge from '../components/Badge'
import Flex from '../components/Flex'
import PortionHeading from '../components/PortionHeading'
import { AiFillHeart } from 'react-icons/ai';
import IconCompare from '../components/Icon/IconCompare'
import IconAddCard from '../components/Icon/IconAddCard'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/cardSlice'



function Product({ src, alt, productName, price, badge }) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addtocart({
      "imgUrl": src,
      "alt": alt,
      "productName": productName,
      "price": price,
      "quantity": 1
    }))
  }





  return (
    <div className='mx-5'>
      <div className='relative group overflow-hidden '>
        <Image src={src} alt={alt} className="w-full" />
        <Badge text={badge} />

        <div className='bg-white p-8 absolute -bottom-44 w-full group-hover:bottom-0 duration-500'>
          <Flex className="justify-end items-center gap-x-4 ">
            <p className='text-sm font-dm font-bold text-gray'>Add to Wish List</p> <AiFillHeart className='text-primary' />
          </Flex>

          <Flex className="justify-end items-center gap-x-4 my-5">
            <p className='text-sm font-dm font-bold text-gray'>Compare</p>
            <IconCompare />
          </Flex>

          <div>
            <div onClick={handleAddToCart} className="flex justify-end items-center gap-x-4 cursor-pointer">
              <p className='text-sm font-dm font-bold text-primary'>Add to Cart</p>
              <IconAddCard />
            </div>

          </div>
        </div>

      </div>


      <PortionHeading text={productName} className="py-2 text-xl font-semibold" />
      <p className='font-dm font-normal text-base text-gray'>{`$ ${price} : 00`}</p>


    </div>
  )
}

export default Product